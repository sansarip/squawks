import random
import re
import unittest
from hypothesis import assume, given, settings, reproduce_failure
from hypothesis.strategies import text, tuples, characters
import string

max_examples = 100


class TestUpper(unittest.TestCase):
    @given(text())
    @settings(max_examples=max_examples, print_blob=True)
    def test_upper_maintains_length(self, s):
        self.assertEqual(len(s.upper()), len(s))

    # Ll stands for letter, lowercase and helps to generates lowercase letters
    @given(text(alphabet=characters(whitelist_categories=['Ll'])))
    @settings(max_examples=max_examples, print_blob=True)
    def test_upper_less_than_lower(self, s):
        assume(s)
        self.assertLess(s.upper(), s)

    @given(tuples(text(alphabet=characters(whitelist_categories=['Ll'])),
                  # Uppercase characters
                  text(alphabet=characters(blacklist_categories=['Ll']))).map(
        lambda t: (t[0], t[1], ''.join(random.sample(t[0] + t[1], len(t[0] + t[1]))))))
    @settings(max_examples=max_examples, print_blob=True)
    def test_upper_avoids_non_lower(self, t):
        lower, other, shuffled = t
	# Capitalizes lowercase characters, character by character
        expected = ''.join(list(map(lambda c: c.upper() if c in lower else c, shuffled)))
        self.assertEqual(expected, shuffled.upper())


if __name__ == '__main__':
    unittest.main()
