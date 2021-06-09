#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Program: Export SUV data in CSV format
Version: 20201121
@author: Pranab Das (GitHub: @pranabdas)
data = suv.save_csv(filename, csvname='', scan=-1)
"""

def save_csv(filename, csvname='', scan=-1):
    import numpy as np
    import pandas as pd
    import os

    fid = open(filename, 'r')
    contents = fid.read()
    fid.close()
    contents = contents.splitlines()

    # find scan id and corresponding line numbers
    scan_id = []
    line_id = []

    for line in range(len(contents)):
        line_content = contents[line].split(' ')
        if line_content[0]=='#S':
            scan_id.append(int(line_content[1]))
            line_id.append(line)

    # Determine the lines to read for specific scan
    # Default scan set to the last scan
    if scan==-1:
        scan = scan_id[-1]

    # In case given scan does not exist in the file
    if scan not in scan_id:
        print("Error! Scan not found!")
        return
    else:
        line_start = line_id[scan-1]
        if scan==scan_id[-1]:
            line_end = len(contents)
        else:
            line_end = line_id[scan] - 1

    if not csvname:
        csvname = filename + '_scan_' + str(scan) + '.csv'

    if os.path.isfile(csvname):
        if csvname[-4:]=='.csv':
            csvname = csvname[:-4]
        csvname = csvname + '_copy.csv'

    # Extract the column names
    for line in range(line_end-line_start):
        line_content = contents[line+line_start].split(' ')
        if line_content[0]=='#L':
            colnames=line_content
            colnames.pop(0)
            colnames = list(filter(None, colnames))

    data = np.loadtxt(filename, comments='#', skiprows=line_start-1, \
                      max_rows=(line_end-line_start))

    # convert to dataframe
    data = pd.DataFrame(data, columns=colnames)
    data.to_csv(csvname, index=False)
    print("Saved data to file:", csvname)
