const path = require('path');

module.exports = {
  entry: {
    'vendor': ['react', 'react-dom', 'prop-types'],
    'example': './example.js'
  },

  output:{
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },

  module: {
    rules: [
      webpack.preset.cssRule({modules: true, sourceMap: true}),
      webpack.preset.babelRule()
    ]
  },
  plugins:[
    new webpack.HtmlWebpackPlugin({
      title: 'Example',
      chunks: [ 'vendor', 'example']
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['example', 'vendor'],
      // (给 chunk 一个不同的名字)
      minChunks: Infinity,
      // (随着 entry chunk 越来越多，
      // 这个配置保证没其它的模块会打包进 vendor chunk)
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}
