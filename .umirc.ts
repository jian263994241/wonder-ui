import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'Wonder UI',
  mode: 'site',
  outputPath: 'dumi-static',
  publicPath: './',
  history: { type: 'hash' },
  extraBabelPlugins: [
    [
      '@emotion/babel-plugin',
      { autoLabel: 'dev-only', sourceMap: true, cssPropOptimization: true }
    ]
  ],
  locales: [
    ['zh-CN', '中文']
    // ['en-US', 'English']
  ],
  alias: {},
  dynamicImport: {},
  themeConfig: {
    hd: {
      rules: [{ maxWidth: 320, mode: 'vw', options: [32, 640] }]
      // 更多 rule 配置访问 https://github.com/umijs/dumi/blob/master/packages/theme-mobile/src/typings/config.d.ts#L7
    }
  },
  resolve: {
    includes: ['packages/wonder-ui/src', 'docs'],
    previewLangs: ['tsx']
  },

  // more config: https://d.umijs.org/zh-CN/config
  navs: {
    'zh-CN': [
      // null, // null 值代表保留约定式生成的导航，只做增量配置
      {
        title: '指南',
        path: '/guide'
      },
      {
        title: '组件',
        path: '/components'
      },
      {
        title: 'GitHub',
        path: 'https://github.com/jian263994241/wonder-ui'
      }
    ]
  },

  styles: [
    `html, body, #root {
      height: 100%;
    }

    .__dumi-default-device {
      top: 100px !important;
      height: 580px !important;
    }

    .__dumi-default-device-status > span:first-of-type {
      text-indent: -999em!important;
    }

    .__dumi-default-mobile-demo-layout, .__dumi-default-mobile-demo-layout>div {
      height: 100%;
      padding: 0 !important;
    }

    li[title=API] + li[title=API] {
      display: none;
    }

    .__dumi-default-menu[data-mode='site'] .__dumi-default-menu-list > li > a {
      padding-left: 28px!important;
    }

    .__dumi-default-menu[data-mode='site'] .__dumi-default-menu-list > li > a ~ ul {
      margin-left: 28px!important;
    }

    .markdown table th, .markdown table td{
      padding: 10px 14px!important;
    }
    `
  ]
});
