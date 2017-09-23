var pkg = require('./package.json');
var prod2Path = '/seashell/webapp/lib/wonder';

fis.match('src/js/wonder.js',{
  guard: false,
  parser:fis.plugin('browserify', {
    shims:{
      'react': 'window.React',
      'react-dom': 'window.ReactDOM'
    },
    umd: 'WONDER'
  }),
  useMap: true
})

fis.match('src/less/ios/uikit.less',{
  parser: fis.plugin('css'),
  isInline: false,
  rExt: '.css',
  useMap: true
})

fis.match('**/app.js',{
  guard: false,
  parser:fis.plugin('browserify',{
    shims:{
      'react': 'window.React',
      'react-dom': 'window.ReactDOM',
      'kui': 'window.WONDER',
      'antd': 'window.antd'
    }
  })
})

fis.media('build')
.match('src/js/wonder.js',{
  release: `${prod2Path}/${pkg.version}/js/wonder.js`
})
.match('src/less/ios/uikit.less',{
  release: `${prod2Path}/${pkg.version}/css/wonder.css`
})
.match('src/less/(fonts/*)',{
  release: `${prod2Path}/${pkg.version}/$1`
})
.match('**/(*.png)',{
  release: 'img/$1'
})
.match('example/(**)',{
  release: 'example/$1'
})
.match('example/mod/**',{
  release: false
})
.match('site/(**)',{
  release: 'site/$1'
})
.match('site/mod/(**)',{
  release: false
})
.match('*', {
  relative: true,
  deploy: fis.plugin('local-deliver', {
    to: './dist'
  })
});

fis.media('dist')
.match('src/js/wonder.js',{
  useHash: false,
  release: `${prod2Path}/${pkg.version}/js/wonder.min.js`
})
.match('src/less/ios/uikit.less',{
  useHash: false,
  optimizer: fis.plugin('clean-css'),
  release: `${prod2Path}/${pkg.version}/css/wonder.min.css`
})
.match('src/less/(fonts/*)',{
  release: `${prod2Path}/${pkg.version}/$1`
})
.match('**/(*.png)',{
  release: 'img/$1'
})
.match('example/(**)',{
  release: 'example/$1'
})
.match('example/mod/**',{
  release: false
})
.match('site/(**)',{
  release: 'site/$1'
})
.match('site/mod/(**)',{
  release: false
})
