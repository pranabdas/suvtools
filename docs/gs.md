---
id: gs
title: Getting started
sidebar_label: Getting started
slug: /
---

### Getting the code

Install latest stable release:
```console
pip3 install --upgrade suvtools
```


### Importing suvtools into your program:

If the `suvtools` directory is inside your project directory, you can import using:
```python
import suvtools as suv
```
Later we can refer to the modules as `suv` in short (e.g., `suv.load`).

:::info

If you are new to python programming, you can check out my [python tutorial](
https://pranabdas.github.io/python-tutorial/).

:::


### Run suvtools along with Jupyter notebook in Docker:

Here is a sample dockerfile. You can adjust according to your needs:

import CodeBlock from '@theme/CodeBlock';
import dockerfile from '!!raw-loader!/Dockerfile';

<CodeBlock language="dockerfile" title="Dockerfile" showLineNumbers>{dockerfile}</CodeBlock>

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
