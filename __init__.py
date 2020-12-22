#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
suv.load("datafile.txt", scan=-1): 
It will return a two dimensional array with 
columns for various parameters. If the second argument, i.e., the scan number 
is not specified, the code will read the last scan from the file. 

suv.fit_gauss(x, y, a='', x0='', sigma='', xmin='', xmax='', num=1000): 
Returns x, Gaussian fitted y values, and prints out relevant parameters. 

suv.fit_lorentz(x, y, a='', x0='', gamma='', xmin='', xmax='', num=1000): 
Returns x, Lorentzian fitted y values, and prints out relevant parameters. 

suv.save_csv("datafile.txt", csvname='', scan=-1): 
Saves scan to a csv file.

suv.norm_bg(energy, intensity, x1, x2, x_norm_loc=-1):
Removes linear background, and normalizes the data. x1, x2 are energy points
that determines the slope of the background. By default the normalization done
at the tail point of the spectra. It can be changed to any other point. 

suv.lock_peak(data, refdata, x1='', x2='', E_col=0, I_col=9, I0_col=4):  
Locks peak position with respect to the reference data. It locks the maximum of
intensity to the same energy; the range of peak search can be specified by input
`x1` and `x2`. If no bounds are given, it will find the maximum in the whole 
data range. 

area = suv.calc_area(y, x, x_start='', x_end=''):
Calculates area under the curve for given x and y values. x_start and x_end can
be specified to set the limit of integration region, if not provided whole range
is integrated. 

"""
from suvtools.src.load import load
from suvtools.src.fit_gauss import fit_gauss
from suvtools.src.fit_lorentz import fit_lorentz
from suvtools.src.save_csv import save_csv
from suvtools.src.norm_bg import norm_bg
from suvtools.src.lock_peak import lock_peak
from suvtools.src.calc_area import calc_area
