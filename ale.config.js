const path = require('path');

module.exports = {
  //app 入口
  entry : path.resolve(__dirname, './kitchen-sink/app.js'),
  //输出配置
  output: {
    path: path.resolve(__dirname, 'kitchen-sink'),
    filename: 'app.bunld.js',
  },
  resolve: {
    alias: {
      '~': __dirname,
      '@wonder-ui/core': path.resolve(__dirname, './packages/core'),
      '@wonder-ui/router': path.resolve(__dirname, './packages/router/src'),
      '@wonder-ui/utils': path.resolve(__dirname, './packages/utils/src'),
      '@wonder-ui/styles': path.resolve(__dirname, './packages/styles/src'),
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
        // ['styled-components', { displayName: true, fileName: false }]
      ];
      return options;
    }
  }
}
