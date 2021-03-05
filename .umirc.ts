import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'Wonder UI',
  mode: 'site',
  locales: [['zh-CN', '中文']],
  extraBabelPlugins: [
    [
      '@emotion/babel-plugin',
      { autoLabel: 'dev-only', sourceMap: true, cssPropOptimization: true }
    ]
  ],

  alias: {
    // '@wonder-ui/core': path.join(__dirname, './packages/wonder-ui/src')
  },
  // more config: https://d.umijs.org/config
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
          'components/space.md',
          'components/whiteSpace.md'
        ]
      },
      {
        title: '导航',
        children: ['components/dropdown.md', 'components/steps.md']
      },
      {
        title: '数据录入',
        children: []
      },
      {
        title: '数据展示',
        children: ['components/badge.md', 'components/collapse.md']
      },
      {
        title: '用户反馈',
        children: [
          'components/popover.md',
          'components/progress.md',
          'components/result.md'
        ]
      },
      {
        title: '路由',
        children: []
      },
      {
        title: '辅助工具',
        children: ['components/portal.md']
      },
      {
        title: '其他',
        children: []
      }
    ]
  }
});
