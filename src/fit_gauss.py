#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Program: Fit peaks with Gaussian distribution
Version: 20201123
@author: Pranab Das (GitHub: @pranabdas)
data = suv.fit_gauss(x, y, a='', x0='', sigma='', xmin='', xmax='')
"""

def fit_gauss(x, y, a='', x0='', sigma='', xmin='', xmax='', num=1000):
    import numpy as np
    from scipy import optimize

    def gauss(x, a, x0, sigma):
        return a*np.exp(-(x-x0)**2/(2*sigma**2))

    if xmin:
        xmin = float(xmin)
        xmin_id = np.where(abs(x-xmin)==min(abs(x-xmin)))[0][0]
        x = x[xmin_id:]
        y = y[xmin_id:]
    else:
        xmin = x[0]

    if xmax:
        xmax = float(xmax)
        xmax_id = np.where(abs(x-xmax)==min(abs(x-xmax)))[0][0]
        x = x[:xmax_id]
        y = y[:xmax_id]
    else:
        xmax = x[-1]

    if not a:
        a = max(y)

    if not x0:
        x0 =  x[np.where(y==max(y))][0]

    if not sigma:
        sigma = abs(x[-1] - x[0])/10

    params, params_covariance = optimize.curve_fit(gauss, x, y, p0=[a, x0, sigma])

    print("a =", params[0],"\nx0 =", params[1], "\nsigma =", params[2], \
        "\nFWHM =", 2.355 * params[2])

    fit_x = np.linspace(xmin, xmax, num)
    fit_y = gauss(fit_x, params[0], params[1], params[2])

    return fit_x, fit_y
