const path = require('path');

module.exports = {
  //app 入口
  entry : './example/app.js',
  //输出配置
  output: {
    path: path.resolve(__dirname, 'example_build'),
    filename: 'app.bunld.js',
  },
  resolve: {
    alias: {
      '~': __dirname
    }
  },
  ale: {
    html: {
      title: 'Wonder UI',
      appMountId: 'root',
      mobile: true
    }
  }
}
