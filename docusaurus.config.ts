import type * as Preset from '@docusaurus/preset-classic';
import type { Config, PresetConfig, ThemeConfig } from '@docusaurus/types';
import {themes} from 'prism-react-renderer';
//
import type { Navbar } from '@docusaurus/theme-common'
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const site_url = 'https://zc-r.github.io/'
const repo_url = 'https://github.com/zc-r/'
//const repo_name = ''

/** Blog Information. */
const meta: Config = {
  // site
  url: 'https://zc-r.github.io/',
  baseUrl: '/',
  //baseUrl: repo_name,
  trailingSlash: false,
  // home
  title: 'ZC:R',
  //favicon: 'img/favicon.ico',
  // locale  
  i18n: {
    defaultLocale: 'kr',
    locales: ['kr'],
  },
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
}

const codeTheme = {
  theme:themes.oneLight,
  darkTheme:themes.oneDark,
  magicComments: [
    // Remember to extend the default highlight class name as well!
    {
      className: "theme-code-block-highlighted-line",
      line: "highlight-next-line",
      block: { start: "highlight-start", end: "highlight-end" },
    },
    {
      className: "error-line",
      line: "error-line",
      block: { start: "error-start", end: "error-end" },
    },
    {
      className: "warn-line",
      line: "warn-line",
      block: { start: "warn-start", end: "warn-end" },
    },
  ],
}

/* Top Navigation bar information */
const navigation: Navbar = {
  title: 'ZC:R',
  //logo: {
  //  src: 'img/favicon.ico',
  //},
  hideOnScroll: true,
  items: [
    {
      label: "Offset",
      position: "left",
      to: "/Offset",
      activeBasePath: "/Offset"
    }
  ]
};

/** theme setting */
const theme: ThemeConfig = {
  //image: 'img/favicon.ico', // tab
  colorMode: {
    defaultMode: 'dark',
    disableSwitch: false,
  }, prism: codeTheme,
  docs: {
    sidebar: {
      hideable: true,
      autoCollapseCategories: true,
    }
  },
  navbar: navigation,
  footer: {
    style: 'dark',
    copyright: `Copyright © ${new Date().getFullYear()}. Made by 4Tel.`,
  },
};

const doc_settings = {
  //editUrl: repo_url+repo_name+'/edit/main/',
  editUrl: 'https://github.com/zc-r/zc-r.github.io/edit/main/',
  remarkPlugins: [remarkMath],
  rehypePlugins: [[rehypeKatex, { strict: false }]],
  showLastUpdateTime: true,
}
const latex_setting = [
  {
    href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
    type: 'text/css',
  },
]

/* first page */
const page1: PresetConfig = [
  'classic',
  {
    docs: {
      sidebarPath: './sidebars.ts',
      routeBasePath: '/',
      ...doc_settings,
      onInlineTags: 'warn',
    },
    theme: {
      customCss: './src/css/custom.css',
    },
  } satisfies Preset.Options,
]

const config: Config = {
  ...meta,
  presets: [page1],
  markdown: {
    mermaid: true,
  },
  themes: [
    '@docusaurus/theme-live-codeblock',
    '@docusaurus/theme-mermaid',
  ],
  themeConfig: theme,
  stylesheets: latex_setting,
};

export default config;
