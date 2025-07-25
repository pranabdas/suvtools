import { themes } from "prism-react-renderer";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
const site_url = "https://pranabdas.github.io";
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "SUV Tools",
  tagline: "Python library to analyze and visualize SSLS SUV beamline data.",
  url: site_url,
  baseUrl: "/suvtools/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  organizationName: "pranabdas",
  projectName: "suvtools",
  titleDelimiter: "•",
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [{ name: "theme-color", content: "#06445c" }],
      prism: {
        theme: themes.github,
        darkTheme: themes.nightOwl,
        additionalLanguages: ["bash", "docker"],
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      colorMode: {
        // defaultMode: "dark",
        // switchConfig: {
        //   darkIcon: "☾",
        //   lightIcon: "☀️",
        // },
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: "SUV Tools",
        hideOnScroll: true,
        logo: {
          alt: "SUV Tools Logo",
          src: "img/favicon.png",
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
                to: site_url + "/docs/",
                target: "_self",
              },
              {
                label: "ARPES Python Tools",
                to: site_url + "/arpespythontools/",
                target: "_self",
              },
              {
                label: "C and C++ Programming",
                to: site_url + "/c-cpp/",
                target: "_self",
              },
              {
                label: "Condensed Matter Notes",
                to: site_url + "/condmat-notes/",
                target: "_self",
              },
              {
                label: "Fortran Programming",
                to: site_url + "/fortran/",
                target: "_self",
              },
              {
                label: "Javascript Tutorial",
                to: site_url + "/javascript/",
                target: "_self",
              },
              {
                label: "Linux Tutorial",
                to: site_url + "/linux/",
                target: "_self",
              },
              {
                label: "Machine Learning Notes",
                to: site_url + "/machine-learning/",
                target: "_self",
              },
              {
                label: "OpenMX tutorial",
                to: site_url + "/openmx/",
                target: "_self",
              },
              {
                label: "Python Tutorial",
                to: site_url + "/python-tutorial/",
                target: "_self",
              },
              {
                label: "Quantum Espresso Tutorial",
                to: site_url + "/espresso/",
                target: "_self",
              },
              {
                label: "Rust Programming",
                to: site_url + "/rust/",
                target: "_self",
              },
              {
                label: "SUV ARPES Manual",
                to: site_url + "/arpes-manual/",
                target: "_self",
              },
            ],
          },
          {
            href: "https://github.com/pranabdas/suvtools",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
            title: "Visit project repository in GitHub",
            target: "_self",
          },
          {
            to: site_url,
            "aria-label": "About me",
            position: "right",
            target: "_self",
            className: "header-homepage-link",
            title: "Go to Pranab's Homepage",
          },
        ],
      },
      footer: {
        style: "dark",
        copyright: `Copyright © ${new Date().getFullYear()} Pranab Das. All rights reserved.`,
      },
    }),

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/pranabdas/suvtools/blob/main/",
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themes: [
    [
      // https://github.com/easyops-cn/docusaurus-search-local
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        docsRouteBasePath: "/docs",
        indexBlog: false,
        indexPages: true,
        highlightSearchTermsOnTargetPage: true,
      },
    ],
  ],

  stylesheets: [
    {
      href: "https://pranab.pages.dev/assets/fonts/katex/0.16.22/katex.min.css",
      type: "text/css",
    },
  ],

  future: {
    experimental_faster: true,
    v4: {
      removeLegacyPostBuildHeadAttribute: true,
      useCssCascadeLayers: false,
    },
  },
};

export default config;
