const path = require('path');
const pkg = require('./package.json');

const resolve = path.resolve;
const externals = [...Object.keys(pkg.dependencies), ...Object.keys(pkg.peerDependencies)];

module.exports = {
  entry: resolve(__dirname, './src/index.js'),
  output: {
    path: resolve(__dirname, '../../npm-packages/wonder-ui-router'),
    filename: 'index.js',
    library: 'webpackDemo',
    libraryTarget: 'umd',
    libraryExport: 'default', 
    umdNamedDefine: true
  },
  mode: 'development',
  externals: [(context, request, callback)=>{
    const matched = externals.find(item=> request.indexOf(item) > -1);
    if(matched){
      return callback(null, 'commonjs ' + request);
    }
    callback();
  }],
  ale: {
    css: {
      inline: true
    }
  }
}