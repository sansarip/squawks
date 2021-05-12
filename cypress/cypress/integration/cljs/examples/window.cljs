(ns examples.window
  (:require-macros [latte.core :refer [describe beforeEach it]]))

(def cy js/cy)

(describe "Window"
  (beforeEach []
    (.visit cy "http://localhost:8080/commands/window"))
  (it "cy.window() - get the global window object" []
    (.should (.window cy) "have.property" "top")))
