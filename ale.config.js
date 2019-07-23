const path = require('path');

module.exports = {
  //app 入口
  entry : './kitchen-sink/app.js',
  //输出配置
  output: {
    path: path.resolve(__dirname, 'kitchen-sink-build'),
    filename: 'app.bunld.js',
  },
  resolve: {
    alias: {
      '~': __dirname,
      '@wonder-ui/core': path.resolve(__dirname, './src/core'),
      '@wonder-ui/components': path.resolve(__dirname, './src/components')
    }
  },
  ale: {
    html: {
      title: 'Wonder UI',
      appMountId: 'root',
      mobile: true
    },
    babel(options) {
      options.plugins = [
        ['styled-components', { displayName: true, fileName: false }]
      ];
      return options;
    }
  }
}
