const path = require('path');

module.exports = {
  //app 入口
  entry: [
    require.resolve('core-js'),
    path.resolve(__dirname, './kitchen-sink/app.js'),
  ],
  //输出配置
  output: {
    path: path.resolve(__dirname, './docs/kitchen-sink'),
    filename: 'app.bunld.js',
  },
  devServer: {
    port: 9000,
  },
  resolve: {
    alias: {
      '@wonder-ui/core': path.resolve(__dirname, './packages/core'),
      '@wonder-ui/icons': path.resolve(__dirname, './packages/icons/src'),
      '@wonder-ui/router': path.resolve(__dirname, './packages/router/src'),
      '@wonder-ui/styles': path.resolve(
        __dirname,
        './packages/wonder-ui-styles/src',
      ),
      '@wonder-ui/utils': path.resolve(__dirname, './packages/utils/src'),
    },
  },
  ale: {
    html: {
      title: 'Wonder UI',
      appMountId: 'root',
      mobile: true,
    },
  },
};
