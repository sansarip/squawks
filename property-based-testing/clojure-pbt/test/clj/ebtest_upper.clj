(ns ebtest-upper
  (:require
    [clojure.test :refer [deftest is testing]]
    [clojure.string :as string]))

(deftest test-uppercase-maintains-length
  (testing "The length of the original string is the same as length of the uppercase string"
    (is (= (count "caca") (count (string/upper-case "caca"))))))

(deftest test-uppercase-less-than-lowercase
  (testing "The value of the uppercase string is less than the value of the lowercase string"
    (is (neg? (compare (string/upper-case "c") "c")))))

(deftest test-uppercase-avoids-non-lowercase
  (testing "Only lowercase characters are affected"
    (is (= "ABC123" (string/upper-case "AbC123")))))




