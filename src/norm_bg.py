#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Program: Load SUV data
Version: 20201211
@author: Pranab Das (Twitter: @pranab_das)
normalized_intensity = suv.norm_bg(energy, intensity, x1, x2, x_norm_loc=-1)
"""

def norm_bg(energy, intensity, x1, x2, x_norm_loc=-1):
    import numpy as np
    
    y1 = intensity[np.where(energy==x1)[0][0]]
    y2 = intensity[np.where(energy==x2)[0][0]]

    m = (y2 - y1)/(x2 - x1)    # slope
    c = y1 - m*x1              # intersection 

    bg = m*energy + c
    intensity -= bg
    return intensity/intensity[x_norm_loc]