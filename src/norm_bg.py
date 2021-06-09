#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Program: Subtracts linear background and normalizes the data
Version: 20210219
@author: Pranab Das (GitHub: @pranabdas)
normalized_intensity = suv.norm_bg(energy, intensity, x1, x2, x_norm_loc=-1)
"""

def norm_bg(energy, intensity, x1, x2, x_norm_loc=-1):
    import numpy as np

    y1 = intensity[np.where(abs(energy-x1)==min(abs(energy-x1)))[0][0]]
    y2 = intensity[np.where(abs(energy-x2)==min(abs(energy-x2)))[0][0]]

    if x_norm_loc!=-1:
        x_norm_loc=np.where(abs(energy-x_norm_loc)==min(abs(energy-x_norm_loc)))[0][0]

    m = (y2 - y1)/(x2 - x1)    # slope
    c = y1 - m*x1              # intersection

    bg = m*energy + c
    intensity -= bg
    return intensity/intensity[x_norm_loc]
