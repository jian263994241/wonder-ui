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
          'components/space.md'
        ]
      }
    ]
  }
});
