#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Program: Load SUV data
Version: 20210604
@author: Pranab Das (GitHub: @pranabdas)
data = suv.load("data.txt", 12)
"""

def load(filename, scan=-1):
    import numpy as np
    import urllib.request
    import itertools

    if (filename[:7]=='http://') or (filename[:8]=='https://'):
        web=True
    else:
        web=False

    if (web):
        try:
            headers = {'User-Agent': 'Mozilla/5.0'}
            req = urllib.request.Request(url = filename, headers = headers)
            contents = urllib.request.urlopen(req).read().decode()
            contents = contents.splitlines()
        except:
            print('Could not read url.')

    else:
        fid = open(filename, 'r')
        if fid.mode == 'r' :
            contents = fid.read()
        fid.close()
        contents = contents.splitlines()

    # remove empty lines
    # contents = list(filter(None, contents))

    # find scan id and corresponding line numbers
    scan_id = []
    line_id = []

    for line in range(len(contents)):
        line_content = contents[line].split(' ')
        if line_content[0]=='#S':
            scan_id.append(int(line_content[1]))
            line_id.append(line)

    scan_id = np.array(scan_id)
    # Determine the lines to read for specific scan
    # Default scan set to the last scan
    if scan==-1:
        scan = scan_id[-1]

    # In case given scan does not exist in the file
    if scan not in scan_id:
        print("Error! Scan not found!")
        return
    else:
        line_start = line_id[np.where(scan_id==scan)[0][0]]

        if scan==scan_id[-1]:
            line_end = len(contents)
        else:
            line_end = line_id[np.where(scan_id==scan)[0][0] +1] - 1

    # Extract the column names
    # for line in range(line_end-line_start):
    #     line_content = contents[line+line_start].split(' ')
    #     if line_content[0]=='#L':
    #         colnames=line_content
    #         colnames.pop(0)
    #         colnames = list(filter(None, colnames))
    #     break

    # print("Scan #", scan, "loaded. Data columns are: \n", colnames)

    # https://numpy.org/doc/stable/release/1.23.0-notes.html#np-loadtxt-has-recieved-several-changes
    lines_to_read = itertools.islice(open(filename), line_start, line_end)
    filtered_lines = itertools.dropwhile(lambda x: x[:1] == '#', lines_to_read)

    return np.loadtxt(filtered_lines)
