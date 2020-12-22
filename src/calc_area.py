#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Program: Calculate area under the curve
Version: 20201221
@author: Pranab Das (Twitter: @pranab_das)
area = suv.calc_area(y, x, x_start='', x_end='')
"""

def calc_area(y, x, x_start='', x_end=''):
    import numpy as np

    if x_start:
        start_index = np.where(x==x_start)[0][0]
    else:
        start_index = 0

    if x_end:
        end_index = np.where(x==x_end)[0][0]
    else:
        end_index = -1

    return np.trapz(y[start_index:end_index], x[start_index:end_index])
