(ns metronome.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [put! chan <!]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defonce app-setup
  (do
    (enable-console-print!)))

(defonce app-state (atom {:bpm {}}))

(defn clock [bpm owner]
  (letfn [(start-interval [millis] 
            (om/update! bpm :interval millis)
            (om/update! bpm :next-beat nil))]
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
                 (let [click-channel (om/get-state owner :click-channel)]
                   (go (loop []
                         (let [new-interval-millis (<! click-channel)]
                           (start-interval new-interval-millis)
                           (recur))))))
      om/IWillUnmount
      (will-unmount [_] (om/set-state! owner :mounted false))
      om/IRender
      (render [_] (dom/span nil)))))

(defn sound [_ owner]
  (reify
    om/IInitState
    (init-state [_] {:beat 0})
    om/IDidMount
    (did-mount [_]
               (let [sound-channel (om/get-state owner :sound-channel)]
                 (go (loop []
                       (let [_     (<! sound-channel)
                             audio (if (zero? (mod (om/get-state owner :beat) 4))
                                     (om/get-node owner "ding")
                                     (om/get-node owner "dong"))]
                         (if (.-paused audio)
                           (.play audio)
                           (set! (.-currentTime audio) 0))
                         (om/update-state! owner :beat inc)
                         (recur))))))
    om/IRender
    (render [_]
            (dom/div nil
                     (dom/audio #js {:ref "ding" :src "media/ding.ogg" :type "audio/ogg" :codecs="vorbis" :autobuffer true})
                     (dom/audio #js {:ref "dong" :src "media/dong.ogg" :type "audio/ogg" :codecs="vorbis" :autobuffer true})))))


(defn millis [] (.now js/performance))

(defn click [_ owner]
  (reify
    om/IInitState
    (init-state [_] {:previous-click nil})
    om/IRenderState
    (render-state [_ {:keys [click-channel previous-click]}]
                  (dom/button #js {:className "btn btn-default btn-lg btn-block btn-tap-tempo"
                                   :onClick (fn []
                                              (let [m (millis)]
                                                (om/set-state! owner :previous-click m)
                                                (when-not (nil? previous-click)
                                                  (put! click-channel (- m previous-click)))))}
                              "tap tempo"))))

(om/root
 (fn [app owner]
   (reify
     om/IInitState
     (init-state [_] {:sound-channel (chan)
                      :click-channel (chan)})
     om/IRenderState
     (render-state
      [_ {:keys [sound-channel click-channel]}]
      (dom/div nil
               (dom/h1 nil "metronome")
               (om/build clock (:bpm app) {:init-state {:sound-channel sound-channel :click-channel click-channel}})
               (om/build sound nil {:init-state {:sound-channel sound-channel}})
               (om/build click nil {:init-state {:click-channel click-channel}}))
      )))
 app-state
 {:target (. js/document (getElementById "app"))})
