"use strict";(self.webpackChunksuvtools=self.webpackChunksuvtools||[]).push([["392"],{6856:function(e,n,t){t.r(n),t.d(n,{metadata:()=>a,contentTitle:()=>o,default:()=>c,assets:()=>r,toc:()=>d,frontMatter:()=>i});var a=JSON.parse('{"id":"hands-on","title":"Hands-on","description":"Import suvtools","source":"@site/docs/hands-on.md","sourceDirName":".","slug":"/hands-on","permalink":"/suvtools/docs/hands-on","draft":false,"unlisted":false,"editUrl":"https://github.com/pranabdas/suvtools/blob/main/docs/hands-on.md","tags":[],"version":"current","frontMatter":{"title":"Hands-on"},"sidebar":"docs","previous":{"title":"Getting started","permalink":"/suvtools/docs/"},"next":{"title":"Glossary","permalink":"/suvtools/docs/glossary"}}'),s=t("5893"),l=t("65");let i={title:"Hands-on"},o=void 0,r={},d=[{value:"Import suvtools",id:"import-suvtools",level:2},{value:"Load data",id:"load-data",level:2},{value:"Plot",id:"plot",level:2},{value:"Fit Gaussian",id:"fit-gaussian",level:2},{value:"Locking peak position",id:"locking-peak-position",level:2},{value:"Background removal and normalization",id:"background-removal-and-normalization",level:2},{value:"Save plaintext",id:"save-plaintext",level:2},{value:"Save CSV",id:"save-csv",level:2},{value:"Curve smoothing",id:"curve-smoothing",level:2}];function p(e){let n={admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"import-suvtools",children:"Import suvtools"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"import suvtools as suv\n"})}),"\n",(0,s.jsx)(n.h2,{id:"load-data",children:"Load data"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'data = suv.load("../dataset/sample_data.txt", 12)\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Here the 2nd argument to ",(0,s.jsx)(n.code,{children:"suv.load"})," is scan number. Let us print the first 2\nrows:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"print(data[:2, :])\n"})}),"\n",(0,s.jsx)(n.p,{children:"Output:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"[[ 3.00000e+00  1.50000e+00 -7.67775e-04  3.64530e-05  1.32849e-01\n   2.41700e+03  2.22000e+02  0.00000e+00  1.00000e+00  8.40872e+05\n   0.00000e+00]\n [ 3.02000e+00  1.51000e+00 -7.72892e-04  3.66960e-05  1.33734e-01\n   2.41800e+03  2.33000e+02  0.00000e+00  1.00000e+00  8.40738e+05\n   0.00000e+00]]\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsx)(n.p,{children:"It is also possible to load data from an URL address:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:'url = "https://example.com/file.txt"\ndata = suv.load(url, 12)\n'})})]}),"\n",(0,s.jsx)(n.h2,{id:"plot",children:"Plot"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",metastring:"showLineNumbers",children:'x = data[:, 0]\ny = data[:, 6]\n\nimport matplotlib.pyplot as plt\n%matplotlib inline\n\nplt.semilogy(x, y, linewidth=0.5)\nplt.xlabel("$2\\\\theta (deg)$")\nplt.ylabel("Intensity (a.u.)")\nplt.xlim(10, 130)\nplt.show()\n'})}),"\n",(0,s.jsx)("img",{alt:"output-01",src:t(5540).Z,class:"inv-hue-rot-180"}),"\n",(0,s.jsx)(n.h2,{id:"fit-gaussian",children:"Fit Gaussian"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"x_fit, y_fit = suv.fit_gauss(x, y, xmin=93, xmax=95)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Output:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"a = 725203.2202698857\nx0 = 94.30231720686922\nsigma = 0.07756533815550148\nFWHM = 0.182666371356206\n"})}),"\n",(0,s.jsx)(n.p,{children:"Let us plot the results:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",metastring:"showLineNumbers",children:"plt.plot(x, y/max(y), 'o', markersize=2, label='Data')\nplt.plot(x_fit, y_fit/max(y_fit), label='Gaussian fit')\nplt.xlabel(\"$2\\\\theta (deg)$\")\nplt.ylabel(\"Intensity (a.u.)\")\nplt.xlim(93.5, 95)\nplt.legend()\nplt.show()\n"})}),"\n",(0,s.jsx)("img",{alt:"output-02",src:t(8774).Z,class:"inv-hue-rot-180"}),"\n",(0,s.jsx)(n.h2,{id:"locking-peak-position",children:"Locking peak position"}),"\n",(0,s.jsx)(n.p,{children:"Let us work with a XAS dataset. Here we want to lock the peak of second spectra\nat same energy as first spectra. We are interested only in the first peak,\ntherefore limit the peak search to [525, 535]. If any limit is not provided, by\ndefault the program will search for maximum in the entire range."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'s1 = suv.load("../dataset/sample_XAS.txt", 1)\ns2 = suv.load("../dataset/sample_XAS.txt", 2)\n\ns2 = suv.lock_peak(s2, s1, 525, 535)\n'})}),"\n",(0,s.jsx)(n.h2,{id:"background-removal-and-normalization",children:"Background removal and normalization"}),"\n",(0,s.jsx)(n.p,{children:"The program removes linear background based on data values at energy point 520\neV and 528 eV (it finds two data point and calculates slope and intersection).\nThen normalize the intensity corresponding to energy value 545 eV (if the\nnormalization location is not provided, the normalization is done at tail/end\npoint)."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",metastring:"showLineNumbers",children:'i1 = suv.norm_bg(s1[:, 0], s1[:, 9]/s1[:, 4], 520, 528, 545)\ni2 = suv.norm_bg(s2[:, 0], s2[:, 9]/s2[:, 4], 520, 528, 545)\n\n# plot\nplt.plot(s1[:, 0], i1, \'-\', linewidth=1, label="spectra 1")\nplt.plot(s2[:, 0], i2, \'-\', linewidth=1, label="spectra 2")\n\nplt.xlabel("Energy (eV)")\nplt.ylabel("Count (normalized)")\nplt.title("XMCD O K-edge")\nplt.xlim(525, 550)\nplt.legend(frameon=False)\nplt.show()\n'})}),"\n",(0,s.jsx)("img",{alt:"output-03",src:t(357).Z,class:"inv-hue-rot-180"}),"\n",(0,s.jsx)(n.p,{children:"If you want to normalize at the highest peak, you can find the energy value\ncorresponding to the maximum intensity by:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"energy_imax = s1[:, 0][np.argmax(s1[:, 9]/s1[:, 4])\n"})}),"\n",(0,s.jsx)(n.h2,{id:"save-plaintext",children:"Save plaintext"}),"\n",(0,s.jsx)(n.p,{children:"Say you want to save the energy and normalized intensity in plaintext to work\nin another plotting software."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import numpy as np\n\ndata = np.array([s1[:, 0], i1]).T\nnp.savetxt("data.txt", data)\n'})}),"\n",(0,s.jsx)(n.h2,{id:"save-csv",children:"Save CSV"}),"\n",(0,s.jsxs)(n.p,{children:["We can save the full scan in a ",(0,s.jsx)(n.strong,{children:".csv"})," file as well."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'suv.save_csv("sample_data.txt", "data.csv", 12)\n'})}),"\n",(0,s.jsx)(n.h2,{id:"curve-smoothing",children:"Curve smoothing"}),"\n",(0,s.jsx)(n.p,{children:"If the data is noisy, we can apply filters to smoothen it. Here is an example of\napplying Gaussian filter:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",metastring:"showLineNumbers",children:'# import necessary packages\nimport numpy as np\nimport matplotlib.pyplot as plt\nfrom scipy.ndimage.filters import gaussian_filter1d\n\n%matplotlib inline\nplt.rcParams["figure.dpi"]=150\nplt.rcParams[\'figure.facecolor\'] = \'white\'\n\n# load your data\ndata = np.loadtxt("data.txt")\nx, y = data[:, 0], (data[:, 1] - min(data[:, 1]))/(max(data[:, 1]) - min(data[:, 1]))\n\n# apply Gaussian filter to y\ny_smth = gaussian_filter1d(y, sigma=2.5)\n\n# make plots\nplt.plot(x, y, lw=1, label="original data")\nplt.plot(x, y_smth, lw=1, label="gauss filtered")\nplt.legend(frameon=False)\nplt.xlabel("x")\nplt.ylabel("y")\nplt.xlim(840, 880)\nplt.show()\n'})}),"\n",(0,s.jsx)("img",{alt:"curve-smothing",src:t(2437).Z,class:"inv-hue-rot-180"})]})}function c(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},2437:function(e,n,t){t.d(n,{Z:function(){return a}});let a=t.p+"assets/images/curve-smoothing-78273833761110378403184cddc287d9.webp"},5540:function(e,n,t){t.d(n,{Z:function(){return a}});let a=t.p+"assets/images/output-01-0fd3884beb4af2a3782010c16c29f30f.webp"},8774:function(e,n,t){t.d(n,{Z:function(){return a}});let a=t.p+"assets/images/output-02-08911730f48c77594a51c8030d37d73e.webp"},357:function(e,n,t){t.d(n,{Z:function(){return a}});let a=t.p+"assets/images/output-03-ef5b00974ff4f004b0ca7d2d4f96cb50.webp"},65:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return i}});var a=t(7294);let s={},l=a.createContext(s);function i(e){let n=a.useContext(l);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);