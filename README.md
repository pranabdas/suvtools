# SUV Tools 

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

Commands:
- `suv.load("datafile.txt", 12)`: It will return a Dataframe. If the second 
argument i.e., scan number is not specified, the code will read the last scan 
from the file.

