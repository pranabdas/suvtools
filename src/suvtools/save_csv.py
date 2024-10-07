#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Program: Export SUV data in CSV format
@author: Pranab Das (GitHub: @pranabdas)
data = suv.save_csv(filename, csvname=None, scan=None)
"""


def save_csv(filename, csvname=None, scan=None):
    import numpy as np
    import pandas as pd
    import os
    import warnings

    fid = open(filename, "r")
    contents = fid.read()
    fid.close()
    contents = contents.splitlines()

    # find scan id and corresponding line numbers
    scan_id = []
    line_id = []

    for line in range(len(contents)):
        line_content = contents[line].split(" ")
        if line_content[0] == "#S":
            scan_id.append(int(line_content[1]))
            line_id.append(line)

    # determine the lines to read for specific scan
    # default scan set to the last scan
    if not scan:
        scan = scan_id[-1]

    # if given scan does not exist in the file
    if scan not in scan_id:
        print("Error! Scan not found!")
        return
    else:
        line_start = line_id[scan - 1]
        if scan == scan_id[-1]:
            line_end = len(contents)
        else:
            line_end = line_id[scan] - 1

    if not csvname:
        csvname = filename + "_scan_" + str(scan) + ".csv"

    if os.path.isfile(csvname):
        if csvname[-4:] == ".csv":
            csvname = csvname[:-4]
        csvname = csvname + "_copy.csv"

    # Extract the column names
    for line in range(line_end - line_start):
        line_content = contents[line + line_start].split(" ")
        if line_content[0] == "#L":
            colnames = line_content
            colnames.pop(0)
            colnames = list(filter(None, colnames))

    # suppress numpy warning related to max_rows behavior
    with warnings.catch_warnings():
        warnings.filterwarnings(action="ignore")
        data = np.loadtxt(
            filename,
            comments="#",
            skiprows=(line_start - 1),
            max_rows=(line_end - line_start),
        )

    # convert to dataframe
    data = pd.DataFrame(data, columns=colnames)
    data.to_csv(csvname, index=False)
    print("Saved data to file:", csvname)
