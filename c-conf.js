fis.match('src/js/kui.js',{
  parser:fis.plugin('browserify', {
    option:{
      shims:{
        'react': 'window.React',
        'react-dom': 'window.ReactDOM'
      },
      umd: 'UIKIT'
    }
  })
})

// fis.match('src/less/kui.less',{
//   parser: fis.plugin('css'),
//   isInline: false,
//   rExt: '.css'
// })

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
        // 'react-router-dom': 'window.ReactRouterDOM',
        'kui': 'window.UIKIT'
      }
    }
  })
})

fis.match('example/pages/*',{
  isMod: true
})
