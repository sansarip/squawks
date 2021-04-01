(ns pbtest-upper
  (:require
    [clojure.test :refer [testing is]]
    [clojure.test.check.clojure-test :refer [defspec]]
    [clojure.test.check.properties :as prop]
    [clojure.test.check.generators :as gen]
    [clojure.string :as string]))

(defspec test-uppercase-maintains-length 100
         (prop/for-all [rand-str gen/string]
           (testing "The length of the original string is the same as length of the uppercase string"
             (is (= (count rand-str) (count (string/upper-case rand-str)))))))

(defspec test-uppercase-less-than-lowercase 100
         (prop/for-all [rand-lower-case-str (gen/fmap
                                              (comp string/lower-case string/join)
                                              (gen/tuple
                                                ;; Random crazy string
                                                (gen/not-empty gen/string)
                                                ;; In order to avoid generating strings that only contain characters
                                                ;; without an upper case form, this block of code generates a string
                                                ;; of alphabetical characters
                                                (gen/fmap
                                                  string/join
                                                  (gen/not-empty
                                                    (gen/vector gen/char-alpha)))))]
           (testing "The value of uppercase string is less than the value of the lowercase string"
             (is (neg? (compare (string/upper-case rand-lower-case-str) rand-lower-case-str))))))

(defspec test-uppercase-avoids-non-lowercase 100
         (prop/for-all [upper-case-str (gen/fmap
                                         (comp string/join (partial map char))
                                         (gen/not-empty
                                           (gen/vector
                                             ;; Capital characters, symbols, and numbers
                                             (gen/one-of
                                               [(gen/choose 32 96)
                                                (gen/choose 123 126)
                                                (gen/choose 128 159)]))))]
           (testing "Only lowercase characters are affected"
             (is (= upper-case-str (string/upper-case upper-case-str))))))


