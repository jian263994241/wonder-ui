var pkg = require('./package.json');

fis.match('src/js/wonder.js',{
  parser:fis.plugin('browserify', {
    option:{
      shims:{
        'react': 'window.React',
        'react-dom': 'window.ReactDOM'
      },
      umd: 'WONDER'
    }
  })
})

fis.match('src/less/ios/uikit.less',{
  parser: fis.plugin('css'),
  isInline: false,
  rExt: '.css'
})

fis.match('example/app.js',{
  parser:fis.plugin('browserify',{
    option:{
      shims:{
        'react': 'window.React',
        'react-dom': 'window.ReactDOM',
        'kui': 'window.WONDER'
      }
    }
  })
})


fis.media('prod2')
.match('*', {
  domain: 'http://192.168.47.179/docs/ui'
})
.match('src/js/wonder.js',{
  useHash: false,
  release: `js/${pkg.name}.${pkg.version}.min.js`
})
.match('src/less/ios/uikit.less',{
  useHash: false,
  optimizer: fis.plugin('clean-css'),
  release: `css/${pkg.name}.${pkg.version}.min.css`
})
.match('src/less/(fonts/*)',{
  release: '$1'
})
.match('**/(*.png)',{
  release: 'img/$1'
})
.match('example/(**)',{
  release: 'example/$1'
})
.match('example/mod/**',{
  release: false
});
