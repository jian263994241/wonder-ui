const path = require('path');

module.exports = {
  //app 入口
  entry : [
    require.resolve('core-js'), 
    path.resolve(__dirname, './kitchen-sink/app.js')
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
      '@wonder-ui/styles': path.resolve(__dirname, './packages/styles/src'),
      '@wonder-ui/utils': path.resolve(__dirname, './packages/utils/src'),
    }
  },
  ale: {
    html: {
      title: 'Wonder UI',
      appMountId: 'root',
      mobile: true,
      scripts: [
        // 'https://cdnjs.cloudflare.com/ajax/libs/es5-shim/4.5.14/es5-shim.min.js'
      ]
    }
  }
}
