---
title: Glossary
---

## calc_area

```python
area = suv.calc_area(y, x, x_start=None, x_end=None)
```
Calculates area under the curve for given `x` and `y` values. `x_start` and
`x_end` can be specified to set the limit of integration region, if not provided
whole range is integrated.

$$
A = \int_{x\_start}^{x\_end} y dx
$$

**Inputs:**

- `x` and `y` : 1D vectors of same length.
- `x_start` and `x_end` : number (float or int), lower and upper limits of the
integration. Optional inputs.

**Outputs:**

- `area` : number (float). Area under the curve. Could take negative values
(e.g., $y$ is negative and $x$ is positive).

## fit_gauss

```python
x_fit, y_fit = suv.fit_gauss(x, y, a=None, x0=None, sigma=None, xmin=None, xmax=None, num=1000)
```
returns x, Gaussian fitted y values, and prints out relevant parameters. `xmin`
and `xmax` determines the range to fit. If `xmin` and `xmax` are not provided,
whole range is used. `num` determines the number of points returned in `x_fit`
and `y_fit`.

**Inputs:**

- `x` and `y` : 1D vectors of same length.
- `a` : optional input, number, peak height in the units of $y$.
- `x0` : optional input, number, peak position in $x$.
- `sigma` : optional input, number, width of peak.
- `xmin` and `xmax` : number (float or int), lower and upper bounds of fitting.
Optional inputs.
- `num` : length of returned vectors (`x_fit` and `y_fit`). Optional input,
default is 1000.

**Outputs:**

- `x_fit` and `y_fit` : 1D vectors of length `num` (default is 1000).

It will also print out the relevant fitting parameters to the standard output.


## fit_lorentz

```python
x_fit, y_fit = suv.fit_lorentz(x, y, a=None, x0=None, gamma=None, xmin=None, xmax=None, num=1000)
```
returns x, Lorentzian fitted y values, and prints out relevant parameters.
`xmin` and `xmax` determines the range to fit. If `xmin` and `xmax` are not
provided, whole range is used. `num` determines the number of points returned
in `x_fit` and `y_fit`.

**Inputs:**

- `x` and `y` : 1D vectors of same length.
- `a` : optional input, number, peak height in the units of $y$.
- `x0` : optional input, number, peak position in $x$.
- `gamma` : optional input, number, width of peak.
- `xmin` and `xmax` : number (float or int), lower and upper bounds of fitting.
Optional inputs.
- `num` : length of returned vectors (`x_fit` and `y_fit`). Optional input,
default is 1000.

**Outputs:**

- `x_fit` and `y_fit` : 1D vectors of length `num` (default is 1000).

It will also print out the relevant fitting parameters to the standard output.


## load

```python
data = suv.load(filename, scan=None)
data = suv.load("datafile.txt", 2)
```
It will return a two dimensional array with columns for various parameters. If
the second argument, i.e., the scan number is not specified, the code will read
the last scan from the file.

**Inputs:**

- `filename` : string, local or https file path.
- `scan` : optional, integer, if no scan argument is provided it loads the last
scan.

**Outputs:**

- `data` : 2D array. Rows represent different data points, while the columns
are different parameters (energy, intensity etc.).

## lock_peak

```python
data_corr = suv.lock_peak(data, refdata, x1=None, x2=None, E_col=0, I_col=9, I0_col=4)
```
Locks peak position with respect to the reference data. It locks the maximum of
intensity to the same energy; the range of peak search can be specified by input
`x1` and `x2`. If no bounds are given, it will find the maximum in the whole
data range.


## norm_bg

```python
int_corr = suv.norm_bg(energy, intensity, x1, x2, x_norm_loc=None)
```
Removes linear background, and normalizes the data. `x1`, `x2` are energy values
that determines the slope of the background. By default the normalization done
at the tail point of the spectra. It can be changed to other point, enter the
corresponding energy value as `x_norm_loc`.


## save_csv

```python
suv.save_csv("datafile.txt", csvname=None, scan=None)
```
saves scan to a csv file. The file will be saved in the save directory as
`datafile` with name `datafile.csv` unless  `csvname` is specified. Like the
`load` module, if the scan number is not specified, it will read the last scan
from the file.
