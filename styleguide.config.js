const fs = require('fs');
const path = require('path');
const preset = require('babel-preset');
const { theme, styles } = require('./styleguide/styleguide.styles');
const { version } = require('./packages/core/package.json');
const styleguideComponents = require('./styleguide/styleguideComponents');

function resolve(...paths) {
  return fs.realpathSync(path.join(__dirname, ...paths));
}

module.exports = {
  title: 'Wonder UI',
  usageMode: 'expand',
  exampleMode: 'expand',
  pagePerSection: true,
  sections : [
    {
      name: '介绍',
      content: './docs/markdown/introduction.md'
    },
    {
      name: '组件',
      sectionDepth: 2,
      sections: [
        {
          name: '路由',
          components: ()=> [
            './packages/core/components/App/App.js',
            './packages/core/components/View/View.js',
            './packages/core/components/Page/Page.js',
            './packages/core/components/Link/Link.js',
            './packages/core/components/RouterStore/RouterStore.js',
          ]
        },
        {
          name: '布局',
          components: ()=> [
            './packages/core/components/Block/Block.js',
            './packages/core/components/Drawer/Drawer.js',
            './packages/core/components/Flex/Flex.js',
            './packages/core/components/HeaderBar/HeaderBar.js',
            './packages/core/components/Toolbar/Toolbar.js',
          ],
        },
        {
          name: '数据录入',
          components: ()=> [
            './packages/core/components/Button/Button.js',
            './packages/core/components/CheckableGroup/CheckableGroup.js',
            './packages/core/components/CheckableTag/CheckableTag.js',
            './packages/core/components/CheckableTagGroup/CheckableTagGroup.js',
            './packages/core/components/Checkbox/Checkbox.js',
            './packages/core/components/CheckboxItem/CheckboxItem.js',
            './packages/core/components/DatePicker/DatePicker.js',
            './packages/core/components/InputItem/InputItem.js',
            './packages/core/components/Picker/Picker.js',
            './packages/core/components/SearchBar/SearchBar.js',
            './packages/core/components/Switch/Switch.js',
            './packages/core/components/TextareaAutosize/TextareaAutosize.js',
          ],
        },
        {
          name: '数据展示',
          components: ()=> [
            './packages/core/components/Empty/Empty.js',
            './packages/core/components/List/List.js',
            './packages/core/components/ListItem/ListItem.js',
            './packages/core/components/ListView/ListView.js',
            './packages/core/components/PullToRefresh/PullToRefresh.js', 
            './packages/core/components/Tag/Tag.js',
            './packages/core/components/Typography/Typography.js',
          ],
        },
        {
          name: '用户反馈',
          components: ()=> [
            './packages/core/components/ActivityIndicator/ActivityIndicator.js',
            './packages/core/components/Backdrop/Backdrop.js',
            './packages/core/components/Dialog/Dialog.js',
            './packages/core/components/Modal/Modal.js',
            './packages/core/components/Preloader/Preloader.js',
            './packages/core/components/toast/toast.js',
          ],
        },
        
      ]
    }
    
  ],
  getExampleFilename(componentPath){
    const name = path.basename(componentPath, '.js');
    return path.join( __dirname, 'docs/markdown', name + '.md' );
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
  compilerConfig: {
    // Don't include an Object.assign ponyfill, we have our own
    objectAssign: 'Object.assign',
    // Transpile only features needed for IE11
    target: { ie: 11 },
    transforms: {
      // Don't throw on ESM imports, we transpile them ourselves
      modules: false,
      // Enable tagged template literals for styled-components
      dangerousTaggedTemplateString: true,
      // to make async/await work by default (no transformation)
      asyncAwait: false,
      dangerousTaggedTemplateString: true,
      moduleImport: false
    },
  },
  webpackConfig: {
    resolve: {
      alias: {
        '@wonder-ui/core': path.resolve(__dirname, './packages/core'),
        '@wonder-ui/router': path.resolve(__dirname, './packages/router/src'),
        '@wonder-ui/styles': path.resolve(__dirname, './packages/styles/src'),
        '@wonder-ui/utils': path.resolve(__dirname, './packages/utils/src'),
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
              presets: [
                [preset, {
                  targets: [
                    'ie >= 9',
                    'edge >= 14',
                    'firefox >= 52',
                    'chrome >= 49',
                    'safari >= 10',
                    'node 8.0',
                  ]
                }]
              ]
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
  styleguideDir: './docs/styleguide_v1', 
};