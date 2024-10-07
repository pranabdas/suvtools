#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Program: Subtracts linear background and normalizes the data
@author: Pranab Das (GitHub: @pranabdas)
normalized_intensity = suv.norm_bg(energy, intensity, x1, x2, x_norm_loc=None)
"""


def norm_bg(energy, intensity, x1, x2, x_norm_loc=None):
    import numpy as np

    y1 = intensity[np.argmin(abs(energy - x1))]
    y2 = intensity[np.argmin(abs(energy - x2))]

    if x_norm_loc:
        x_norm_loc = np.argmin(abs(energy - x_norm_loc))
    else:
        x_norm_loc = -1

    m = (y2 - y1) / (x2 - x1)  # slope
    c = y1 - (m * x1)  # intersection

    bg = (m * energy) + c
    intensity -= bg
    return intensity / intensity[x_norm_loc]
