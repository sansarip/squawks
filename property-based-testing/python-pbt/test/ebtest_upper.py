import unittest


class TestUpper(unittest.TestCase):
    def test_upper_maintains_length(self):
        self.assertEqual(len('caca'), len('caca'.upper()))

    def test_upper_less_than_lower(self):
        self.assertLess('c'.upper(), 'c')

    def test_upper_avoids_non_lower(self):
        self.assertEqual('ABC123', 'AbC123'.upper())


if __name__ == '__main__':
    unittest.main()
