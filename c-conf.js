var pkg = require('./package.json');

fis.match('src/js/wonder.js',{
  guard: false,
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

fis.match('**/app.js',{
  guard: false,
  parser:fis.plugin('browserify',{
    option:{
      shims:{
        'react': 'window.React',
        'react-dom': 'window.ReactDOM',
        'kui': 'window.WONDER',
        'antd': 'window.antd'
      }
    }
  })
})

var prod2Path = '/seashell/webapp/lib/wonder';

fis.media('dist')
.match('src/js/wonder.js',{
  useHash: false,
  release: `${prod2Path}/${pkg.version}/js/${pkg.name}.min.js`
})
.match('src/less/ios/uikit.less',{
  useHash: false,
  optimizer: fis.plugin('clean-css'),
  release: `${prod2Path}/${pkg.version}/css/${pkg.name}.min.css`
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
