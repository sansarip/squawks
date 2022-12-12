(ns ebtest-upper
  (:require
    [clojure.test :refer [deftest is testing]]
    [clojure.string :as string]))

(deftest test-uppercase
  (testing "string is uppercased"
    (is (= "baba" (string/upper-case "baba"))))
  
  (testing "empty string is unaffected"
    (is (= "" (string/upper-case ""))))
  
  (testing "non-alpha string is unaffected"
    (is (= "123[]{}.!/" (string/upper-case "123[]{}.!/")))))
