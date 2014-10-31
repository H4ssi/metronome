(ns metronome.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [put! chan <!]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(enable-console-print!)

(def app-state (atom {:bpm  {:bpm nil}}))

(defn clock [bpm owner]
  (letfn [(clear-interval [] (let [id (om/get-state owner :interval)] (when-not (nil? id) (js/clearInterval id))))
          (start-interval [millis]
                          (let [sound-channel (om/get-state owner :sound-channel)]
                            (om/update! bpm :bpm millis)
                            (put! sound-channel true)
                            (om/set-state! owner :interval (js/setInterval  #(put! sound-channel true) millis))))]
    (reify
      om/IInitState
      (init-state [_] {:interval nil})

      om/IDidMount
      (did-mount [_]
                 (clear-interval)
                 (let [interval-millis (:get bpm)
                       click-channel   (om/get-state owner :click-channel)]
                   (when-not (nil? interval-millis) (start-interval interval-millis))
                   (go (loop []
                         (let [new-interval-millis (<! click-channel)]
                           (clear-interval)
                           (start-interval new-interval-millis)
                           (recur))))))

      om/IWillUnmount
      (will-unmount [_] (clear-interval))

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
                       (and (<! sound-channel) (.play (if (zero? (mod (om/get-state owner :beat) 4)) (om/get-node owner "ding") (om/get-node owner "dong"))))
                       (om/update-state! owner :beat inc)
                       (recur)))))
    om/IRender
    (render [_]
            (dom/div nil
                     (dom/audio #js {:ref "ding" :src "ding.ogg" :type "audio/ogg" :codecs="vorbis" :autobuffer true})
                     (dom/audio #js {:ref "dong" :src "dong.ogg" :type "audio/ogg" :codecs="vorbis" :autobuffer true})))))


(defn millis [] (.getTime (js/Date.)))

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
