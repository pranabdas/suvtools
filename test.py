#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Program: Python unittest
Version: 20210604
@author: Pranab Das (Twitter: @pranab_das)
Run    : python3 test.py
or     : python3 -m unittest test.py
"""
import unittest
from src.load import load
from src.calc_area import calc_area

# load the data from url. If you have the data files locally, you may replace
# the urls with local file path
url = "https://raw.githubusercontent.com/pranabdas/suvtools/master/dataset/sample_data.txt"
data = load(url, 12)

class Test(unittest.TestCase):
    def test_load(self):
        self.assertEqual(data.shape, (6501, 11))
        self.assertAlmostEqual(data[1200, 0], 27.0)
        self.assertAlmostEqual(data[1500, 6], 26.0)

    def test_calc_area(self):
        self.assertAlmostEqual(calc_area(data[:, 6], data[:, 0], 20, 120), 270053.09999999)

if __name__ == "__main__":
    unittest.main()
