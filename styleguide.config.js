const fs = require('fs');
const path = require('path');
const preset = require('babel-preset');
const { theme, styles } = require('./styleguide.styles');
const { version } = require('./src/core/package.json');

function resolve(...paths) {
  return fs.realpathSync(path.join(__dirname, ...paths));
}

module.exports = {
  title: 'Wonder-UI 移动端 React 组件库',
  usageMode: 'expand',
  pagePerSection: true,
  sections : [
    {
      name: '介绍',
      content: './docs/introduction.md'
    },
    {
      name: '组件',
      sectionDepth: 0,
      sections: [
        {
          name: '路由',
          components: ()=> [
            './src/core/components/App/App.js',
            './src/core/components/View/View.js',
            './src/core/components/Page/Page.js',
            './src/core/components/Link/Link.js',
          ]
        },
        {
          name: '布局',
          components: ()=> [
            './src/core/components/Flex/Flex.js',
            './src/core/components/Block/Block.js',
            './src/core/components/Toolbar/Toolbar.js'
          ],
        },
        {
          name: '数据录入',
          components: ()=> [
            './src/core/components/Button/Button.js',
            './src/core/components/ToggleButtonGroup/ToggleButtonGroup.js'
          ],
        },
        {
          name: '数据展示',
          components: ()=> [
            './src/core/components/List/List.js',
            './src/core/components/ListItem/ListItem.js',
            './src/core/components/ListView/ListView.js',
            './src/core/components/Tag/Tag.js',
          ],
        },
        {
          name: '用户反馈',
          components: ()=> [
            './src/core/components/Dialog/Dialog.js',
            './src/core/components/toast/toast.js',
            './src/core/components/Preloader/Preloader.js',
          ],
        },
      ]
    }
    
  ],
  getExampleFilename(componentPath){
    const name = path.basename(componentPath, '.js');
    return path.join( __dirname, 'docs', name + '.md' );
  },
  getComponentPathLine(componentPath) {
    let name = path.basename(componentPath, '.js');
    // name = name.replace(/\w{1}/, name[0].toLocaleUpperCase());
    return `import { ${name} } from '@wonder-ui/core';`
  },
  require: [
    resolve('./styleguide.styles.css')
  ],
  theme,
  styles,
  webpackConfig: {
    resolve: {
      alias: {
        '~': __dirname,
        '@wonder-ui/core': path.resolve(__dirname, './src/core'),
        '@wonder-ui/components': path.resolve(__dirname, './src/components')
      }
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          exclude: /(node_modules|bower_components)/,
          use: [{
            loader: require.resolve('babel-loader'),
            options: {
              presets: [preset]
            }
          }]
        },{
          test: /\.css$/,
          use: [
            require.resolve('style-loader'),
            require.resolve('css-loader')
          ]
        }
      ]
    }
  },
  ribbon: {
		url: 'https://github.com/jian263994241/wonder-ui',
  },
  version,
  styleguideDir: './docs/styleguide', 
  compilerConfig: {
    transforms: {
      dangerousTaggedTemplateString: true,
      moduleImport: false
    },
  }
};
