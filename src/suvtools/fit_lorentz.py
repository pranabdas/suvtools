#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Program: Fit peaks with Lorentzian distribution
@author: Pranab Das (GitHub: @pranabdas)
data = suv.fit_lorentz(x, y, a=None, x0=None, gamma=None, xmin=None, xmax=None)
"""


def fit_lorentz(x, y, a=None, x0=None, gamma=None, xmin=None, xmax=None, num=1000):
    import numpy as np
    from scipy import optimize

    def lorentz(x, a, x0, gamma):
        return a * gamma**2 / (np.pi * gamma * ((x - x0) ** 2 + gamma**2))

    if xmin:
        xmin = float(xmin)
        xmin_id = np.argmin(abs(x - xmin))
        x = x[xmin_id:]
        y = y[xmin_id:]
    else:
        xmin = x[0]

    if xmax:
        xmax = float(xmax)
        xmax_id = np.argmin(abs(x - xmax))
        x = x[:xmax_id]
        y = y[:xmax_id]
    else:
        xmax = x[-1]

    if not a:
        a = max(y)

    if not x0:
        x0 = x[np.argmax(y)]

    if not gamma:
        gamma = abs(x[-1] - x[0]) / 10

    params, _ = optimize.curve_fit(lorentz, x, y, p0=[a, x0, gamma])

    print(
        "\n#---- Lorentzian fitting parameters ----#\na =",
        params[0],
        "\nx0 =",
        params[1],
        "\ngamma =",
        params[2],
        "\nFWHM =",
        2 * params[2],
        "\n#---------------------------------------#",
    )

    fit_x = np.linspace(xmin, xmax, num)
    fit_y = lorentz(fit_x, params[0], params[1], params[2])

    return fit_x, fit_y
