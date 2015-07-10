(defproject metronome "0.1.1-SNAPSHOT"
  :description "a web metronome that at least tries to suck less than others"
  :url "https://h4ssi.github.io/metronome"

  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "0.0-3308"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [org.omcljs/om "0.9.0"]]

  :plugins [[lein-cljsbuild "1.0.6"]
            [lein-figwheel "0.3.7"]]

  :source-paths ["src"]

  :cljsbuild { 
    :builds [{:id "metronome"
              :source-paths ["src"]
              :figwheel true
              :compiler {
                :main metronome.core
                :asset-path "js/out"
                :output-to "resources/public/js/metronome.js"
                :output-dir "resources/public/js/out"
                :optimizations :none
                :source-map true}}]})
