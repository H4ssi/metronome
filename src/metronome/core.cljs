(ns metronome.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [put! chan <!]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defonce app-setup
  (do
    (enable-console-print!)))

(defonce app-state (atom {:bpm {} 
                          :meter {:count 0}}))

(defn clock [bpm owner]
  (letfn [(start-interval [millis] 
            (om/update! bpm :interval millis)
            (om/update! bpm :next-beat nil))
          (stop-interval []
            (om/update! bpm :interval nil))]
    (reify
      om/IInitState
      (init-state [_] {:mounted false})
      om/IDidMount
      (did-mount [_]
                 (om/set-state! owner :mounted true)
                 (.requestAnimationFrame 
                   js/window 
                   (fn cb [t] 
                     (let [{:keys [interval next-beat]} @bpm]
                       (when interval
                         (let [do-beat   (or (nil? next-beat) (> t next-beat))]
                           (when do-beat
                             (put! (om/get-state owner :sound-channel) true)
                             (om/update! bpm :next-beat (+ t interval))))))
                     (when (om/get-state owner :mounted)
                       (.requestAnimationFrame js/window cb))))
                 (let [tempo-channel (om/get-state owner :tempo-channel)]
                   (go (loop []
                         (let [new-interval-millis (<! tempo-channel)]
                           (if (false? new-interval-millis)
                             (stop-interval)
                             (start-interval new-interval-millis))
                           (recur))))))
      om/IWillUnmount
      (will-unmount [_] (om/set-state! owner :mounted false))
      om/IRender
      (render [_] (dom/span nil)))))

(defn sound [meter owner]
  (reify
    om/IInitState
    (init-state [_] {:hidden true
                     :cb (fn [] (om/set-state! owner :hidden (.-hidden js/document)))})

    om/IDidMount
    (did-mount [_]
               (let [cb            (om/get-state owner :cb)
                     sound-channel (om/get-state owner :sound-channel)]
                 (cb)
                 (.addEventListener js/document "visibilitychange" cb)
                 (go (loop []
                       (let [_     (<! sound-channel)
                             audio (if (zero? (:count @meter))
                                     (om/get-node owner "ding")
                                     (om/get-node owner "dong"))]
                         (if (and 
                               (.-paused audio) 
                               (not (om/get-state owner :hidden)))
                           (.play audio)
                           (set! (.-currentTime audio) 0))
                         (om/transact! meter :count #(mod (inc %) 4))
                         (recur))))))

    om/IWillUnmount
    (will-unmount [_] (.removeEventListener js/document "visibilitychange" (om/get-state owner :cb)))

    om/IRender
    (render [_]
            (dom/div nil
                     (dom/audio #js {:ref "ding" :src "media/ding.ogg" :type "audio/ogg" :codecs="vorbis" :autobuffer true})
                     (dom/audio #js {:ref "dong" :src "media/dong.ogg" :type "audio/ogg" :codecs="vorbis" :autobuffer true})))))


(defn millis [] (.now js/performance))

(defn tap-tempo-button [_ owner]
  (reify
    om/IInitState
    (init-state [_] {:previous-click nil
                     :previous-intervals nil
                     :should-stop false
                     :adjusting-timeout nil
                     :adjusting false})
    om/IDidMount
    (did-mount [_]
      (letfn [(key-handler [e] (when (= "Shift" (.-key e)) (om/set-state! owner :should-stop (= "keydown" (.-type e)))))]
        (.addEventListener js/document "keydown" key-handler)
        (.addEventListener js/document "keyup" key-handler)))
    om/IRenderState
    (render-state [_ {:keys [tempo-channel should-stop adjusting]}]
                  (dom/button #js {:className "btn btn-default btn-lg btn-block btn-tap-tempo"
                                   :onClick (fn []
                                              (let [clear-adjusting-timeout (fn [] (when-let [t (om/get-state owner :adjusting-timeout)]
                                                                                     (.clearInterval js/window t)
                                                                                     (om/set-state! owner :adjusting-timeout nil)))
                                                    start-adjusting (fn [] (clear-adjusting-timeout)
                                                                           (om/set-state! owner :adjusting true))
                                                    stop-adjusting (fn [] (clear-adjusting-timeout)
                                                                          (om/set-state! owner :adjusting false))
                                                    reset-intervals (fn [] (om/set-state! owner :previous-intervals nil)
                                                                           (om/set-state! owner :previous-click nil))]
                                                (if (om/get-state owner :should-stop)
                                                  (do
                                                    (reset-intervals)
                                                    (stop-adjusting)
                                                    (put! tempo-channel false))
                                                  (let [m (millis)]
                                                    (start-adjusting)
                                                    (when-let [previous-click (om/get-state owner :previous-click)]
                                                      (let [interval (- m previous-click)
                                                            previous-intervals (om/get-state owner :previous-intervals)
                                                            previous-interval (first previous-intervals)
                                                            new-interval (fn [] 
                                                                           (clear-adjusting-timeout)
                                                                           (om/update-state! owner :previous-intervals #(conj % interval))
                                                                           (let [avg (/ (reduce + interval previous-intervals) (inc (count previous-intervals)))
                                                                                 t (.setTimeout js/window (fn []
                                                                                                            (reset-intervals)
                                                                                                            (stop-adjusting)) (* interval 1.2))]
                                                                             (put! tempo-channel avg)
                                                                             (om/set-state! owner :adjusting-timeout t)))]
                                                        (cond
                                                          (nil? previous-interval)
                                                          (new-interval)
  
                                                          (> interval (* 0.8 previous-interval))
                                                          (new-interval)
  
                                                          :else
                                                          (do
                                                            (reset-intervals)
                                                            (clear-adjusting-timeout)))))
                                                    (om/set-state! owner :previous-click m)))))}
                              (str
                                (if should-stop "stop" "tap tempo")
                                (if adjusting " [...]" ""))))))

(defn dots [meter owner]
  (reify
    om/IRender
    (render [_] 
      (let [dot (fn [pos]
                  (dom/div #js {:className "col-xs-3"}
                           (dom/span #js {:className (str "glyphicon glyphicon-record " pos (if (= (:count meter) pos) 
                                                                                         "" 
                                                                                         " hidden"))})))]
        (dom/div #js {:className "row"} 
                 (dot 1) ; sound is not done on render loop, thus the strange order here
                 (dot 2)
                 (dot 3)
                 (dot 0))))))

(om/root
 (fn [app owner]
   (reify
     om/IInitState
     (init-state [_] {:sound-channel (chan)
                      :tempo-channel (chan)})
     om/IRenderState
     (render-state
      [_ {:keys [sound-channel tempo-channel]}]
      (dom/div nil
               (dom/h1 nil "metronome")
               (om/build clock (:bpm app) {:init-state {:sound-channel sound-channel :tempo-channel tempo-channel}})
               (om/build sound (:meter app) {:init-state {:sound-channel sound-channel}})
               (om/build tap-tempo-button nil {:init-state {:tempo-channel tempo-channel}})
               (om/build dots (:meter app))))))
 app-state
 {:target (. js/document (getElementById "app"))})
