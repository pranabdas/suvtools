#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Program: Lock the peaks at same energy location
Version: 20210219
@author: Pranab Das (Twitter: @pranab_das)
data = suv.lock_peak(data, refdata, x1='', x2='', E_col=0, I_col=9, I0_col=4)
"""

def lock_peak(data, refdata, x1='', x2='', E_col=0, I_col=9, I0_col=4):
    import numpy as np

    if data.shape != refdata.shape:
        print("Error! Data and reference data must have same dimensions!")
        return

    if not x1:
        x1 = refdata[0, E_col]
    if not x2:
        x2 = refdata[-1, E_col]

    # x1_id = np.where(refdata[:, E_col]==x1)[0][0]
    x1_id = np.where(abs(refdata[:, E_col]-x1)==min(abs(refdata[:, E_col]-x1)))[0][0]
    # x2_id = np.where(refdata[:, E_col]==x2)[0][0]
    x2_id = np.where(abs(refdata[:, E_col]-x2)==min(abs(refdata[:, E_col]-x2)))[0][0]

    ref_peak_id = np.where(refdata[x1_id:x2_id, I_col]/refdata[x1_id:x2_id, I0_col]\
              ==max(refdata[x1_id:x2_id, I_col]/refdata[x1_id:x2_id, I0_col]))[0][0]

    peak_id = np.where(data[x1_id:x2_id, I_col]/data[x1_id:x2_id, I0_col]==\
              max(data[x1_id:x2_id, I_col]/data[x1_id:x2_id, I0_col]))[0][0]

    diff_id = peak_id - ref_peak_id

    if diff_id > 0:
        for ii in range(diff_id):
            data = np.delete(data, 0, 0)
            data = np.vstack((data, data[-1, :]))
    elif diff_id < 0:
        for ii in range(abs(diff_id)):
            data = np.delete(data, -1, 0)
            data = np.vstack((data[0, :], data))
    
    data[:, E_col] = refdata[:, E_col]

    return data
