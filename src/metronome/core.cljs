(ns metronome.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [put! chan <!]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(enable-console-print!)

(def app-state (atom {:text "Hello world!"
                      :bpm  [60]}))

(defn clock [bpm owner]
  (letfn [(clear-interval [] (let [id (om/get-state owner :interval)] (when-not (nil? id) (js/clearInterval id))))
          (reset-interval [millis]
                          (clear-interval)
                          (let [sound-channel (om/get-state owner :sound-channel)]
                            (om/set-state! owner :interval (js/setInterval  #(put! sound-channel true) millis))))]
    (reify
      om/IInitState
      (init-state [_] {:interval nil})

      om/IDidMount
      (did-mount [_] (reset-interval 1000))

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

(om/root
  (fn [app owner]
    (reify
      om/IInitState
      (init-state [_] {:sound-channel (chan)})
      om/IRenderState
      (render-state
       [_ {:keys [sound-channel]}]
              (dom/div nil
               (dom/h1 nil (:text app))
               (om/build clock {:bpm app} {:init-state {:sound-channel sound-channel}})
               (om/build sound {:bpm app} {:init-state {:sound-channel sound-channel}}))
        )))
  app-state
  {:target (. js/document (getElementById "app"))})
