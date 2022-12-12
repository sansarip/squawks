import unittest


class TestUpper(unittest.TestCase):
    def test_lowercase_is_uppercased(self):
        self.assertEqual('BABA', 'baba'.upper())

    def test_empty_string(self):
        self.assertEqual(''.upper(), '')

    def test_non_alpha_unaffected(self):
        self.assertEqual('0123[]{}./!?@', '0123[]{}./!?@'.upper())


if __name__ == '__main__':
    unittest.main()
