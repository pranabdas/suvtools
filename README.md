<h1 align="center">SUV Tools</h1>

<p align="center">
  <a href="https://github.com/pranabdas/suvtools/actions/workflows/python-tests.yml"><img src="https://github.com/pranabdas/suvtools/actions/workflows/python-tests.yml/badge.svg" alt="Python tests status"></a>
  <a href="https://github.com/pranabdas/suvtools/actions/workflows/deploy-gh-pages.yml"><img src="https://github.com/pranabdas/suvtools/actions/workflows/deploy-gh-pages.yml/badge.svg" alt="Deploy gh-pages status"></a>
  <a href="https://github.com/pranabdas/suvtools/actions/workflows/publish.yml"><img src="https://github.com/pranabdas/suvtools/actions/workflows/publish.yml/badge.svg" alt="Deploy gh-pages status"></a>
  <a href="https://github.com/pranabdas/suvtools/blob/master/LICENSE"><img src="https://img.shields.io/github/license/sourcerer-io/hall-of-fame.svg?colorB=A31F34"></a>
  <a href="https://pypi.org/project/suvtools/"><img src="https://img.shields.io/github/v/release/pranabdas/suvtools.svg" alt="Latest Release"/></a>
</p>


Visit the project homepage <https://pranabdas.github.io/suvtools/>

## Quick start

Install latest stable release:
```console
pip install --upgrade suvtools
```

Import suvtools into your project:
```python
import suvtools as suv
```

**Modules:**

- `suv.load("datafile.txt", scan=None)`: It will return a two dimensional array
with columns for various parameters. If the second argument, i.e., the scan
number is not specified, the code will read the last scan from the file.

- `suv.fit_gauss(x, y, a=None, x0=None, sigma=None, xmin=None, xmax=None, num=1000)`:
returns x, Gaussian fitted y values, and prints out relevant parameters. `xmin`
and `xmax` determines the range to fit. If `xmin` and `xmax` are not provided,
whole range is used. `num` determines the number of points returned in `x_fit`
and `y_fit`.

- `suv.fit_lorentz(x, y, a=None, x0=None, gamma=None, xmin=None, xmax=None, num=1000)`:
returns x, Lorentzian fitted y values, and prints out relevant parameters.
`xmin` and `xmax` determines the range to fit. If `xmin` and `xmax` are not
provided, whole range is used. `num` determines the number of points returned in
`x_fit` and `y_fit`.

- `suv.save_csv("datafile.txt", csvname=None, scan=None)`: saves scan to a csv
file. The file will be saved in the save directory as `datafile` with name
`datafile.csv` unless  `csvname` is specified. Like the `load` module, if the
scan number is not specified, it will read the last scan from the file.

- `suv.norm_bg(energy, intensity, x1, x2, x_norm_loc=None)`:
Removes linear background, and normalizes the data. x1, x2 are energy values
that determines the slope of the background. By default the normalization done
at the tail point of the spectra. It can be changed to other point, enter the
corresponding energy value. The intention is to normalize at an energy value
away from the peaks/features of interest.

- `suv.lock_peak(data, refdata, x1=None, x2=None, E_col=0, I_col=9, I0_col=4)`:
Locks peak position with respect to the reference data. It locks the maximum of
intensity to the same energy; the range of peak search can be specified by input
`x1` and `x2`. If no bounds are given, it will find the maximum in the whole
data range.

- `suv.calc_area(y, x, x_start=None, x_end=None)`:
Calculates area under the curve for given `x` and `y` values. `x_start` and
`x_end` can be specified to set the limit of integration region, if not provided
whole range is integrated.

See the notebook and documentation for example usage.

### Python tests

```console
python3 -m unittest discover tests
```
