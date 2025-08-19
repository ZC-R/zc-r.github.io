import type * as Preset from '@docusaurus/preset-classic';
import type { Config, PresetConfig, ThemeConfig } from '@docusaurus/types';
import { themes } from 'prism-react-renderer';
//
import type { Navbar } from '@docusaurus/theme-common'
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const site_url = 'https://zc-r.github.io/'
const repo_url = 'https://github.com/zc-r/'
const repo_name = 'zc-r.github.io'

/** Blog Information. */
const meta: Config = {
  // site
  url: site_url,
  baseUrl: '/',
  trailingSlash: false,
  // home
  title: 'ZC-R',
  //favicon: 'img/favicon.ico',
  // locale  
  i18n: {
    defaultLocale: 'kr',
    locales: ['kr'],
  },
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
}

const codeTheme = {
  theme: themes.oneLight,
  darkTheme: themes.oneDark,
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
  title: 'ZC-R',
  //logo: {
  //  src: 'img/favicon.ico',
  //},
  hideOnScroll: true,
  items: [
    {
      label: "입문서",
      position: "left",
      to: "/coming-soon",
      // to: "/intro",
    },
    {
      label: "함수",
      position: "left",
      to: "/coming-soon",
      // to: "/function",
    },
    {
      label: "오프셋",
      position: "left",
      items: [
        {
          label: "설명",
          to: "/offset/main",
        },
        {
          label: "TrgPlayer",
          to: "/offset/player"
        },
        {
          label: "CUnit",
          to: "/offset/cunit",
        },
        {
          label: "명령",
          to: "/offset/order"
        },
        {
          label: "이미지",
          to: "/offset/image",
        },
        {
          label: "업그레이드",
          to: "/offset/upgrade"
        },
        {
          label: "무기",
          to: "/offset/weapon"
        },
        {
          label: "Replay",
          to: "/offset/replay",
        }
      ]
    },
    {
      label: "유틸리티",
      position: "left",
      to: "/coming-soon"
      // to: "/utils",
    },
    {
      label: "기여하기",
      position: "left",
      to: "/coming-soon",
      // to: "/contrib"
    },
    {
      position: "right",
      to: "https://github.com/ZC-R/zc-r.github.io",
      className: "header-github-link",
    },
    {
      label: "🍀",
      position: "right",
      to: "https://cafe.naver.com/edac",
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
  editUrl: repo_url + repo_name + '/blob/main/',
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
