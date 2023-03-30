// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "FreeSWITCH Documentation",
  tagline: "This is a MIRROR",
  url: "https://developer.signalwire.com",
  baseUrl: "/freeswitch/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.webp",

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
          editUrl: "https://github.com/signalwire/freeswitch-docs/tree/main/",
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
          alt: "FreeSWITCH Documentation",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "FreeSWITCH-Explained/index",
            position: "left",
            label: "FreeSWITCH Explained",
          },
          {
            type: "doc",
            docId: "Channel-Variables-Catalog/index",
            position: "left",
            label: "Variables",
          },
          {
            href: "https://developer.signalwire.com/guides",
            label: "SignalWire",
            position: "left",
            target: "_self",
          },
          {
            href: "https://github.com/signalwire/freeswitch",
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
            title: "Video",
            items: [
              {
                label: "Youtube",
                href: "https://www.youtube.com/freeswitch",
              },
              {
                label: "About",
                to: "/about/mirror",
              },
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
              {
                label: "Official Docs",
                to: "https://developer.signalwire.com/freeswitch/",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Forums",
                href: "https://forum.signalwire.community/",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/freeswitch",
              },
              {
                label: "FreeSWITCH中文",
                href: "https://freeswitch.org.cn/",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Cluecon",
                href: "https://www.cluecon.com/",
              },
              {
                label: "GitHub",
                href: "https://github.com/signalwire/freeswitch",
              },
              {
                label: "RTS Home",
                href: "http://rts.cn/",
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
      algolia: {
        appId: "2NBPM6ETKJ",
        apiKey: "4489aa468117b5bfbcb83f7b0addddc9",
        indexName: "freeswitch-docs",
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
