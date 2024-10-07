#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Program: Calculate area under the curve
@author: Pranab Das (GitHub: @pranabdas)
area = suv.calc_area(y, x, x_end=None, x_end=None)
"""


def calc_area(y, x, x_start=None, x_end=None):
    import numpy as np

    if x_start:
        start_index = np.argmin(abs(x - x_start))
    else:
        start_index = 0

    if x_end:
        end_index = np.argmin(abs(x - x_end))
    else:
        end_index = -1

    return np.trapezoid(y[start_index:end_index], x[start_index:end_index])
