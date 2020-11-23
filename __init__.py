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
"""
from suvtools.src.load import load
from suvtools.src.fit_gauss import fit_gauss
from suvtools.src.fit_lorentz import fit_lorentz
from suvtools.src.save_csv import save_csv
