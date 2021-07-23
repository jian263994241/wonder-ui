import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'Wonder UI',
  mode: 'site',
  outputPath: 'dumi-static',
  publicPath: './',
  history: { type: 'hash' },
  locales: [['zh-CN', '中文']],
  extraBabelPlugins: [
    [
      '@emotion/babel-plugin',
      { autoLabel: 'dev-only', sourceMap: true, cssPropOptimization: true }
    ]
  ],

  alias: {},

  themeConfig: {
    hd: {
      rules: [{ maxWidth: 320, mode: 'vw', options: [32, 640] }]
      // 更多 rule 配置访问 https://github.com/umijs/dumi/blob/master/packages/theme-mobile/src/typings/config.d.ts#L7
    }
  },

  // more config: https://d.umijs.org/zh-CN/config
  navs: {
    'zh-CN': [
      // null, // null 值代表保留约定式生成的导航，只做增量配置
      {
        title: '快速上手',
        path: '/getting-started'
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
  menus: {
    '/components': [
      {
        title: '通用',
        children: [
          'components/button.md',
          'components/buttonGroup.md',
          'components/icon.md',
          'components/typography.md'
        ]
      },
      {
        title: '布局',
        children: [
          'components/container.md',
          'components/divider.md',
          'components/grid.md',
          'components/page.md',
          'components/space.md',
          'components/sticky.md',
          'components/whiteSpace.md'
        ]
      },
      {
        title: '导航',
        children: [
          'components/dropdown.md',
          'components/dropdownMenu.md',
          'components/navbar.md',
          'components/steps.md'
        ]
      },
      {
        title: '录入',
        children: [
          'components/checkableGroup.md',
          'components/checkbox.md',
          'components/input.md',
          'components/inputNumber.md',
          'components/listInputItem.md',
          'components/picker.md',
          'components/radio.md',
          'components/search.md',
          'components/stepButton.md',
          'components/stepper.md',
          'components/toggle.md'
        ]
      },
      {
        title: '展示',
        children: [
          'components/backtop.md',
          'components/badge.md',
          'components/collapse.md',
          'components/countdown.md',
          'components/empty.md',
          'components/label.md',
          'components/list.md',
          'components/noticebar.md',
          'components/pullRefresh.md',
          'components/skeleton.md',
          'components/swipe.md',
          'components/tabs.md',
          'components/tag.md',
          'components/tooltip.md'
        ]
      },
      {
        title: '反馈',
        children: [
          'components/activityIndicator.md',
          'components/backdrop.md',
          'components/dialog.md',
          'components/drawer.md',
          'components/popup.md',
          'components/preloader.md',
          'components/progress.md',
          'components/result.md',
          'components/snackbar.md'
        ]
      },
      {
        title: '路由',
        children: []
      },
      {
        title: '辅助',
        children: [
          'components/modal.md',
          'components/popover.md',
          'components/portal.md'
        ]
      },
      {
        title: '其他',
        children: []
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

    `
  ]
});
