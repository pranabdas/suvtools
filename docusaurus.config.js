const math = require("remark-math");
const katex = require("rehype-katex");
module.exports = {
  title: "SUV Tools",
  tagline: "Python libraries to analyze and visualize SSLS SUV beamline data.",
  url: "https://pranabdas.github.io",
  baseUrl: "/suvtools/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "pranabdas",
  projectName: "suvtools",
  themeConfig: {
    prism: {
      theme: require("prism-react-renderer/themes/github"),
      darkTheme: require("prism-react-renderer/themes/nightOwl"),
      additionalLanguages: ["docker"],
    },
    hideableSidebar: true,
    // colorMode: {
    //   defaultMode: "dark",
    //   switchConfig: {
    //     // darkIcon: '☾',
    //     // lightIcon: "☀️"
    //   },
    //   respectPrefersColorScheme: true,
    // },
    navbar: {
      title: "SUV Tools",
      logo: {
        alt: "SUV Tools Logo",
        src: "img/favicon.ico",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
          items: [
            {
              label: "SUV Tools",
              to: "docs/",
            },
            {
              label: "~ ~ ~ Other Docs ~ ~ ~",
            },
            {
              label: "ARPES Python Tools",
              to: "https://pranabdas.github.io/arpespythontools/",
              target: "_self",
            },
            {
              label: "Linux Tutorial",
              to: "https://pranabdas.github.io/linux/",
              target: "_self",
            },
            {
              label: "Machine Learning Notes",
              to: "https://pranabdas.github.io/machine-learning/",
              target: "_self",
            },
            {
              label: "Python Tutorial",
              to: "https://pranabdas.github.io/python-tutorial/",
              target: "_self",
            },
            {
              label: "Quantum Espresso Tutorial",
              to: "https://pranabdas.github.io/espresso/",
              target: "_self",
            },
            {
              label: "Condensed Matter Notes",
              href: "https://pranabdas.github.io/docs/condmat-notes/",
            },
            {
              label: "Fortran Programming",
              href: "https://pranabdas.github.io/docs/fortran/",
            },
            {
              label: "FullProf Tutorial",
              href: "https://pranabdas.github.io/docs/fullprof/",
            },
            {
              label: "Javascript Tutorial",
              href: "https://pranabdas.github.io/docs/js-learning/",
            },
            {
              label: "SUV ARPES Manual",
              href: "https://pranabdas.github.io/docs/arpes-suv-man/",
            },
          ],
        },
        {
          to: "https://pranabdas.github.io",
          label: "About me",
          position: "left",
          target: "_self",
        },
        {
          href: "https://github.com/pranabdas/suvtools",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
          // target: "_self",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} Pranab Das. All rights reserved.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/pranabdas/suvtools/blob/master/",
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc",
      crossorigin: "anonymous",
    },
  ],
};
