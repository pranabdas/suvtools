"use strict";(self.webpackChunksuvtools=self.webpackChunksuvtools||[]).push([[30],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),c=l,g=d["".concat(i,".").concat(c)]||d[c]||m[c]||o;return n?a.createElement(g,r(r({ref:t},u),{},{components:n})):a.createElement(g,r({ref:t},u))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,r=new Array(o);r[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:l,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4381:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var a=n(7462),l=n(3366),o=(n(7294),n(3905)),r=["components"],s={id:"examples",title:"Examples"},i=void 0,p={unversionedId:"examples",id:"examples",title:"Examples",description:"Import suvtools",source:"@site/docs/examples.md",sourceDirName:".",slug:"/examples",permalink:"/suvtools/docs/examples",draft:!1,editUrl:"https://github.com/pranabdas/suvtools/blob/main/docs/examples.md",tags:[],version:"current",frontMatter:{id:"examples",title:"Examples"},sidebar:"docs",previous:{title:"Getting started",permalink:"/suvtools/docs/"},next:{title:"Glossary",permalink:"/suvtools/docs/glossary"}},u={},m=[{value:"Import suvtools",id:"import-suvtools",level:2},{value:"Load data",id:"load-data",level:2},{value:"Plot",id:"plot",level:2},{value:"Fit Gaussian",id:"fit-gaussian",level:2},{value:"Locking peak position",id:"locking-peak-position",level:2},{value:"Background removal and normalization",id:"background-removal-and-normalization",level:2},{value:"Save plaintext",id:"save-plaintext",level:2},{value:"Save CSV",id:"save-csv",level:2},{value:"Curve smoothing",id:"curve-smoothing",level:2}],d={toc:m};function c(e){var t=e.components,s=(0,l.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"import-suvtools"},"Import suvtools"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# if suvtools is not under working directory uncomment following two lines\n# import sys\n# sys.path.append("/parent/suvtools/folder/")\nimport suvtools as suv\n')),(0,o.kt)("h2",{id:"load-data"},"Load data"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'data = suv.load("../dataset/sample_data.txt", 12)\n')),(0,o.kt)("p",null,"Let us print the first 2 rows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"print(data[:2, :])\n")),(0,o.kt)("p",null,"Output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[[ 3.00000e+00  1.50000e+00 -7.67775e-04  3.64530e-05  1.32849e-01\n   2.41700e+03  2.22000e+02  0.00000e+00  1.00000e+00  8.40872e+05\n   0.00000e+00]\n [ 3.02000e+00  1.51000e+00 -7.72892e-04  3.66960e-05  1.33734e-01\n   2.41800e+03  2.33000e+02  0.00000e+00  1.00000e+00  8.40738e+05\n   0.00000e+00]]\n")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"It is also possible to load data from URL address as well."))),(0,o.kt)("h2",{id:"plot"},"Plot"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"showLineNumbers",showLineNumbers:!0},'x = data[:, 0]\ny = data[:, 6]\n\nimport matplotlib.pyplot as plt\n%matplotlib inline\n\nplt.semilogy(x, y, linewidth=0.5)\nplt.xlabel("$2\\\\theta (deg)$")\nplt.ylabel("Intensity (a.u.)")\nplt.xlim(10, 130)\nplt.show()\n')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Plot 1",src:n(4401).Z,width:"1058",height:"794"})),(0,o.kt)("h2",{id:"fit-gaussian"},"Fit Gaussian"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"x_fit, y_fit = suv.fit_gauss(x, y, xmin=93, xmax=95)\n")),(0,o.kt)("p",null,"Output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"a = 725203.2202698857\nx0 = 94.30231720686922\nsigma = 0.07756533815550148\nFWHM = 0.182666371356206\n")),(0,o.kt)("p",null,"Let us plot the results:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"showLineNumbers",showLineNumbers:!0},"plt.plot(x, y/max(y), 'o', markersize=2, label='Data')\nplt.plot(x_fit, y_fit/max(y_fit), label='Gaussian fit')\nplt.xlabel(\"$2\\\\theta (deg)$\")\nplt.ylabel(\"Intensity (a.u.)\")\nplt.xlim(93.5, 95)\nplt.legend()\nplt.show()\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Plot 2",src:n(392).Z,width:"1080",height:"793"})),(0,o.kt)("h2",{id:"locking-peak-position"},"Locking peak position"),(0,o.kt)("p",null,"Let us work with a XAS dataset. Here we want to lock the peak of second spectra\nat same energy as first spectra. We are interested only in the first peak,\ntherefore limit the peak search to ","[525, 535]",". If any limit is not provided, by\ndefault the program will search for maximum in the entire range."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'s1 = suv.load("../dataset/sample_XAS.txt", 1)\ns2 = suv.load("../dataset/sample_XAS.txt", 2)\n\ns2 = suv.lock_peak(s2, s1, 525, 535)\n')),(0,o.kt)("h2",{id:"background-removal-and-normalization"},"Background removal and normalization"),(0,o.kt)("p",null,"The program removes linear background based on data values at energy point 520\neV and 528 eV (it finds two data point and calculates slope and intersection).\nThen normalize the intensity corresponding to energy value 545 eV (if the\nnormalization location is not provided, the normalization is done at tail/end\npoint)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"showLineNumbers",showLineNumbers:!0},'i1 = suv.norm_bg(s1[:, 0], s1[:, 9]/s1[:, 4], 520, 528, 545)\ni2 = suv.norm_bg(s2[:, 0], s2[:, 9]/s2[:, 4], 520, 528, 545)\n\n# plot\nplt.plot(s1[:, 0], i1, \'-\', linewidth=1, label="spectra 1")\nplt.plot(s2[:, 0], i2, \'-\', linewidth=1, label="spectra 2")\n\nplt.xlabel("Energy (eV)")\nplt.ylabel("Count (normalized)")\nplt.title("XMCD O K-edge")\nplt.xlim(525, 550)\nplt.legend(frameon=False)\nplt.show()\n')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Plot 3",src:n(2646).Z,width:"1077",height:"822"})),(0,o.kt)("p",null,"If you want to normalize at the highest peak, you can find the energy value\ncorresponding to the maximum intensity by:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"energy_imax = s1[:, 0][np.argmax(s1[:, 9]/s1[:, 4])\n")),(0,o.kt)("h2",{id:"save-plaintext"},"Save plaintext"),(0,o.kt)("p",null,"Say you want to save the energy and normalized intensity in plaintext to work\nin another plotting software."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import numpy as np\n\ndata = np.array([s1[:, 0], i1]).T\nnp.savetxt("data.txt", data)\n')),(0,o.kt)("h2",{id:"save-csv"},"Save CSV"),(0,o.kt)("p",null,"We can save the full scan in a ",(0,o.kt)("strong",{parentName:"p"},".csv")," file as well."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'suv.save_csv("sample_data.txt", "data.csv", 12)\n')),(0,o.kt)("h2",{id:"curve-smoothing"},"Curve smoothing"),(0,o.kt)("p",null,"If the data is noisy, we can apply filters to smoothen it. Here is an example of\napplying Gaussian filter:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"showLineNumbers",showLineNumbers:!0},'# import necessary packages\nimport numpy as np\nimport matplotlib.pyplot as plt\nfrom scipy.ndimage.filters import gaussian_filter1d\n\n%matplotlib inline\nplt.rcParams["figure.dpi"]=150\nplt.rcParams[\'figure.facecolor\'] = \'white\'\n\n# load your data\ndata = np.loadtxt("data.txt")\nx, y = data[:, 0], (data[:, 1] - min(data[:, 1]))/(max(data[:, 1]) - min(data[:, 1]))\n\n# apply Gaussian filter to y\ny_smth = gaussian_filter1d(y, sigma=2.5)\n\n# make plots\nplt.plot(x, y, lw=1, label="original data")\nplt.plot(x, y_smth, lw=1, label="gauss filtered")\nplt.legend(frameon=False)\nplt.xlabel("x")\nplt.ylabel("y")\nplt.xlim(840, 880)\nplt.show()\n')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Curve Smoothing",src:n(2626).Z,width:"818",height:"546"})))}c.isMDXComponent=!0},2626:function(e,t,n){t.Z=n.p+"assets/images/curve-smoothing-95d948bc084d1e123ef75293636e6020.png"},4401:function(e,t,n){t.Z=n.p+"assets/images/output-01-446d5a11fc5635fc6ee85606bbd68199.png"},392:function(e,t,n){t.Z=n.p+"assets/images/output-02-f423c3e42efcf00f7997dc3592eea297.png"},2646:function(e,t,n){t.Z=n.p+"assets/images/output-03-0d38f19c798d972d2d5da86486714c7d.png"}}]);