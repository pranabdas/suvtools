### SUV Tools 

Clone this repository: 
```sh
git clone --depth 1 https://github.com/pranabdas/suvtools.git
```

Install required python packages:
```sh
pip3 install --upgrade -r requirements.txt
```

Import SUVTools in your project:
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

Please see the notebook for example usage. 