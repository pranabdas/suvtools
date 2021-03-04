### SUV Tools

Visit the project homepage <https://pranabdas.github.io/suvtools/>

#### Quick start

Clone this repository:
```sh
git clone --depth 1 https://github.com/pranabdas/suvtools.git
```

Install required python packages:
```sh
pip3 install --upgrade -r requirements.txt
```

Import SUVTools in your project (unless the library folder is in your working
directory or any of the python lookup paths, you need to add the parent folder
path):
```py
import sys
sys.path.append("/parent/suvtools/folder/")
import suvtools as suv
```

**Modules:**
- `suv.load("datafile.txt", scan=-1)`: It will return a two dimensional array with
columns for various parameters. If the second argument, i.e., the scan number
is not specified, the code will read the last scan from the file.

- `suv.fit_gauss(x, y, a='', x0='', sigma='', xmin='', xmax='', num=1000)`:
returns x, Gaussian fitted y values, and prints out relevant parameters. `xmin` and `xmax` determines the range to fit. If `xmin` and `xmax` are not provided, whole range is used. `num` determines the number of points returned in `x_fit` and `y_fit`.

- `suv.fit_lorentz(x, y, a='', x0='', gamma='', xmin='', xmax='', num=1000)`:
returns x, Lorentzian fitted y values, and prints out relevant parameters. `xmin` and `xmax` determines the range to fit. If `xmin` and `xmax` are not provided, whole range is used. `num` determines the number of points returned in `x_fit` and `y_fit`.

- `suv.save_csv("datafile.txt", csvname='', scan=-1)`: saves scan to a csv file. The file will be saved in the save directory as `datafile` with name `datafile.csv` unless  `csvname` is specified. Like the `load` module, if the scan number is not specified, it will read the last scan from the file.

- `suv.norm_bg(energy, intensity, x1, x2, x_norm_loc=-1)`:
Removes linear background, and normalizes the data. x1, x2 are energy values
that determines the slope of the background. By default the normalization done
at the tail point of the spectra. It can be changed to other point, enter the
corresponding energy value.

- `suv.lock_peak(data, refdata, x1='', x2='', E_col=0, I_col=9, I0_col=4)`:
Locks peak position with respect to the reference data. It locks the maximum of
intensity to the same energy; the range of peak search can be specified by input
`x1` and `x2`. If no bounds are given, it will find the maximum in the whole
data range.

- `suv.calc_area(y, x, x_start='', x_end='')`:
Calculates area under the curve for given `x` and `y` values. `x_start` and
`x_end` can be specified to set the limit of integration region, if not provided
whole range is integrated.

See the notebook for some example usage.

### Development (documentation)
```
git clone https://github.com/pranabdas/suvtools.git
npm install
npm start
```

### Deployment (documentation to GitHub pages)
```
npm run build
npm run gh-deploy
```
