# @wonder-ui/core

文档: [doc](https://jian263994241.github.io/wonder-ui/styleguide)

# babel-plugin-import 按需加载

```js

{
  plugins: [
    ["import", { 
      libraryName: '@wonder-ui/core', 
      libraryDirectory: 'components', 
      camel2DashComponentName: false 
      },
       "@wonder-ui/core"
    ]
  ]
}

```