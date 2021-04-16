---
id: gs
title: Getting started
sidebar_label: Getting started
slug: /
---
### Getting the code
If you are using git, you can clone the project by:
```bash
git clone https://github.com/pranabdas/suvtools.git
```

You can also download the ZIP archive of the package [here](
https://github.com/pranabdas/suvtools/releases).

### Requirements

You will need Python 3 and following python packages installed:
```bash
pip3 install numpy matplotlib scipy pandas
```

Alternatively, you can install the packages using `requirements.txt`:
```bash
pip3 install --upgrade -r requirements.txt
```

### Importing suvtools modules into your program:
If the `suvtools` directory is inside your project directory, you can import using:
```python
import suvtools as suv
```
Later we can refer to the modules as `suv.` (e.g., `suv.load`).

If the `suvtools` directory is placed outside project directory, we can import using:
```python
import sys
sys.path.append("/parent/suvtools/path/")
import suvtools as suv
```

:::info

If you are new to python programming, you can check out my [python tutorial](
https://pranabdas.github.io/python-tutorial/).

:::

### Run suvtools along with Jupyter notebook in Docker:

Here is a sample dockerfile. You can adjust according to your needs:
```dockerfile title="Dockerfile"
# Start from Ubuntu 20.04 LTS
FROM ubuntu:focal

# Update OS
RUN apt update && apt upgrade -y

# Install software packages
RUN apt install -y python3 python3-pip

# Install pip packages
RUN pip3 install jupyterlab numpy scipy matplotlib

# jupyterlab settings
RUN mkdir /etc/jupyter && \
    (echo "c.ServerApp.ip = '0.0.0.0'" && \
    echo "c.ServerApp.allow_root = True" && \
    echo "c.ServerApp.open_browser = False") \
        >> /etc/jupyter/jupyter_server_config.py

# leave in `/home` which we can map with the host
WORKDIR /home
```

Build the Docker image:
```bash
docker build -t suvtools .
```

Run Docker:
```bash
docker run -ti -p 8888:8888 -v ${PWD}:/home suvtools bash
```

Launch jupyterlab and create python 3 notebook:
```bash
jupyter-lab
```
