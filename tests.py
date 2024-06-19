#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Program: Python unittest
Version: 20220214
@author: Pranab Das (Twitter: @pranab_das)
Run    : python3 test.py
or     : python3 -m unittest test.py
"""

import unittest
import numpy as np
from src.load import load
from src.calc_area import calc_area
from src.fit_gauss import fit_gauss
from src.fit_lorentz import fit_lorentz
from src.lock_peak import lock_peak
from src.norm_bg import norm_bg

data = load("dataset/sample_data.txt", 12)
s1 = load("dataset/sample_XAS.txt", 1)
s2 = load("dataset/sample_XAS.txt", 2)


class Test(unittest.TestCase):
    def test_load(self):
        self.assertEqual(data.shape, (6501, 11))
        self.assertAlmostEqual(data[1200, 0], 27.0)
        self.assertAlmostEqual(data[1500, 6], 26.0)

    def test_calc_area(self):
        self.assertAlmostEqual(
            calc_area(data[:, 6], data[:, 0], 20, 120), 270053.1, places=1)

    def test_fit_gauss(self):
        x_fit, y_fit = fit_gauss(data[:, 0], data[:, 6], xmin=93, xmax=95)
        x0 = x_fit[np.argmax(y_fit)]
        self.assertGreater(x0, 94.2)
        self.assertLess(x0, 94.4)

    def test_fit_lorentz(self):
        x_fit, y_fit = fit_lorentz(data[:, 0], data[:, 6], xmin=93, xmax=95)
        x0 = x_fit[np.argmax(y_fit)]
        self.assertGreater(x0, 94.2)
        self.assertLess(x0, 94.4)

    def test_lock_peak(self):
        s2_locked = lock_peak(s2, s1, 525, 535)
        self.assertEqual(np.argmax(s1[:150, 9]/s1[:150, 4]),
                         np.argmax(s2_locked[:150, 9]/s2_locked[:150, 4]))

    def test_norm_bg(self):
        i1 = norm_bg(s1[:, 0], s1[:, 9]/s1[:, 4], 520, 528, 545)
        i2 = norm_bg(s2[:, 0], s2[:, 9]/s2[:, 4], 520, 528, 545)
        i3 = norm_bg(s1[:, 0], s1[:, 9]/s1[:, 4], 520, 528)
        i4 = norm_bg(s2[:, 0], s2[:, 9]/s2[:, 4], 520, 528)
        self.assertEqual(i1[np.where(s1[:, 0] == 545)[0][0]], 1.0)
        self.assertEqual(i2[np.where(s1[:, 0] == 545)[0][0]], 1.0)
        self.assertEqual(i3[-1], 1.0)
        self.assertEqual(i4[-1], 1.0)

if __name__ == "__main__":
    unittest.main()
