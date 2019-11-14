const fs = require('fs');
const path = require('path');
const preset = require('babel-preset');
const { theme, styles } = require('./styleguide/styleguide.styles');
const { version } = require('./src/core/package.json');
const styleguideComponents = require('./styleguide/styleguideComponents');

function resolve(...paths) {
  return fs.realpathSync(path.join(__dirname, ...paths));
}

module.exports = {
  title: 'Wonder-UI',
  usageMode: 'expand',
  exampleMode: 'expand',
  pagePerSection: true,
  sections : [
    {
      name: '介绍',
      content: './docs/introduction.md'
    },
    {
      name: '组件',
      sectionDepth: 2,
      sections: [
        {
          name: '路由',
          components: ()=> [
            './src/core/components/App/App.js',
            './src/core/components/View/View.js',
            './src/core/components/Page/Page.js',
            './src/core/components/Link/Link.js',
            './src/core/components/RouterStore/RouterStore.js',
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
            './src/core/components/ToggleButtonGroup/ToggleButtonGroup.js',
            './src/core/components/Checkbox/Checkbox.js',
          ],
        },
        {
          name: '数据展示',
          components: ()=> [
            './src/core/components/List/List.js',
            './src/core/components/ListItem/ListItem.js',
            './src/core/components/CheckboxItem/CheckboxItem.js',
            './src/core/components/ListView/ListView.js',
            './src/core/components/Tag/Tag.js',
            './src/core/components/Empty/Empty.js',
          ],
        },
        {
          name: '用户反馈',
          components: ()=> [
            './src/core/components/Modal/Modal.js',
            './src/core/components/Dialog/Dialog.js',
            './src/core/components/toast/toast.js',
            './src/core/components/Preloader/Preloader.js',
            './src/core/components/ActivityIndicator/ActivityIndicator.js',
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
    'babel-polyfill',
    resolve('./styleguide/doc.css'),
  ],
  styleguideComponents,
  theme,
  styles,
  webpackConfig: {
    resolve: {
      alias: {
        '~': __dirname,
        '@wonder-ui/core': path.resolve(__dirname, './src/core'),
        '@wonder-ui/router': path.resolve(__dirname, './src/router')
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
        },{
          test: /\.(svg|png)$/,
          use: [
            require.resolve('file-loader')
          ]
        }
      ]
    }
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
