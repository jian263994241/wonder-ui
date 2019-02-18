const path = require('path');

module.exports = {
  //app 入口
  entries : './example/app/app.js',
  //输出配置
  output: {
    path: path.resolve(__dirname, 'example'),
    //app js 输出文件
    filename: 'app.bunld.js',
    //执行js的html文件
    htmlname: 'index.html',
    //打包zip
    // zip: null //'myProject.zip'
  },
  htmlData: {
    //html的标题
    title: 'Demos'
  },
  vars: {
    // APIURL: '/srs' js 全局变量
  },
  // 压缩
  // minify: true,
  watch: true,
  devServer: {
    port: 3000,
    //生成服务器二维码, 方便手机扫码
    qrcode: false,
    open: 'index.html', //启动服务器打开路径
    //服务器目录, 与输出目录一致
    contentBase: path.resolve(__dirname, 'example'),
  },
}
