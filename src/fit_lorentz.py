#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Program: Fit peaks with Gaussian distribution
Version: 20201123
@author: Pranab Das (Twitter: @pranab_das)
data = suv.fit_lorentz(x, y, a='', x0='', gamma='', xmin='', xmax='')
"""

def fit_lorentz(x, y, a='', x0='', gamma='', xmin='', xmax='', num=1000):
    import numpy as np
    from scipy import optimize

    def lorentz(x, a, x0, gamma):
        return a*gamma**2/(np.pi*gamma*((x - x0)**2 + gamma**2))
    
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
        
    if not gamma:
        gamma = abs(x[-1] - x[0])/10

    params, params_covariance = optimize.curve_fit(lorentz, x, y, p0=[a, x0, gamma])

    print("a =", params[0],"\nx0 =", params[1], "\ngamma =", params[2], \
        "\nFWHM =", 2 * params[2])

    fit_x = np.linspace(xmin, xmax, num)
    fit_y = lorentz(fit_x, params[0], params[1], params[2])
    
    return fit_x, fit_y
