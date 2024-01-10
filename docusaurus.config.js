// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "RTS 文档",
  tagline: "Real-Time SIP Server",
  url: "http://rts.cn",
  baseUrl: "/docs/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en-US",
    locales: ["en-US"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/rts-cn/docs/tree/main/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        //title: "FreeSWITCH Documentation",
        logo: {
          alt: "RTS 文档",
          src: "img/rts.svg",
        },
        items: [
          {
            href: "/",
            label: "首页",
          },
          {
            href: "/docs/rts/",
            label: "RTS文档",
          },
          {
            type: "doc",
            docId: "FreeSWITCH-Explained/index",
            position: "left",
            label: "FreeSWITCH文档",
          },
          {
            type: "doc",
            docId: "Channel-Variables-Catalog/index",
            position: "left",
            label: "通道变量",
          },
          // {
          //   href: "https://developer.signalwire.com/guides",
          //   label: "SignalWire",
          //   position: "left",
          //   target: "_self",
          // },
          {
            href: "https://github.com/rts-cn/rts",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      colorMode: { disableSwitch: true, defaultMode: "light" },
      footer: {
        style: "dark",
        links: [
          {
            title: "关于",
            items: [
              {
                label: "关于",
                to: "/about/rts/",
              },
              // {
              //   label: "Tutorial",
              //   to: "/docs/intro",
              // },
            ],
          },
          {
            title: "社区",
            items: [
              {
                label: "讨论",
                href: "https://github.com/rts-cn/rts/discussions",
              },
              {
                label: "FreeSWITCH中文",
                href: "https://freeswitch.org.cn/",
              },
            ],
          },
          {
            title: "更多",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/rts-cn/rts",
              },
              {
                label: "RTS Home",
                href: "http://rts.cn/",
              },
              {
                label: "《大道至简》",
                href: "https://book.dujinfang.com/2023/12/07/dead-simple.html?f=rts-wiki",
              },
            ],
          },
        ],
        // copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      xalgolia: {
        appId: "xxxxxx",
        apiKey: "xxxxxx",
        indexName: "rts-docs",
        externalUrlRegex: `.*`,
        /**
         * We need to set this to false, otherwise the query is done with
         * default filters such as "docusaurus_tag:docs-default-current", which
         * exclude all the content from README.
         *
         * Look for default facetFilters.
         */
        contextualSearch: false,
        /**
         * We need to disable the searchPage because the results there are not
         * accurate (they don't respect the contextualSearch setting value).
         *
         * Reference: https://github.com/facebook/docusaurus/issues/3805
         */
        searchPagePath: false,
      },
    }),

  plugins: ["docusaurus-plugin-sass"],

  scripts: [
    // Baidu Analytics
    {
      src: "https://hm.baidu.com/hm.js?16a7c8bfcfe44d006b8ad19c5273a286",
      async: true,
    },
  ],
};

module.exports = config;
