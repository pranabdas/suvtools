#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Program: Lock the peaks at same energy location
@author: Pranab Das (GitHub: @pranabdas)
data = suv.lock_peak(data, refdata, x1=None, x2=None, E_col=0, I_col=9, I0_col=4)
"""


def lock_peak(data, refdata, x1=None, x2=None, E_col=0, I_col=9, I0_col=4):
    import numpy as np

    if data.shape != refdata.shape:
        print("Error! Data and reference data must have same dimensions!")
        return

    if not x1:
        x1 = refdata[0, E_col]
    if not x2:
        x2 = refdata[-1, E_col]

    x1_id = np.argmin(abs(refdata[:, E_col] - x1))
    x2_id = np.argmin(abs(refdata[:, E_col] - x2))

    ref_peak_id = np.argmax(refdata[x1_id:x2_id, I_col] / refdata[x1_id:x2_id, I0_col])

    peak_id = np.argmax(data[x1_id:x2_id, I_col] / data[x1_id:x2_id, I0_col])

    diff_id = peak_id - ref_peak_id

    if diff_id > 0:
        for _ in range(diff_id):
            data = np.delete(data, 0, 0)
            data = np.vstack((data, data[-1, :]))
    elif diff_id < 0:
        for _ in range(abs(diff_id)):
            data = np.delete(data, -1, 0)
            data = np.vstack((data[0, :], data))

    data[:, E_col] = refdata[:, E_col]

    return data
