fis.match('src/js/kui.js',{
  parser:fis.plugin('browserify', {
    option:{
      shims:{
        'react': 'global.React',
        'react-dom': 'global.ReactDOM'
      }
    }
  })
})

// fis.match('src/less/kui.less',{
//   parser: fis.plugin('css'),
//   isInline: false,
//   rExt: '.css'
// })

fis.match('src/less/ios/framework7.ios.less',{
  parser: fis.plugin('css'),
  isInline: false,
  rExt: '.css'
})



fis.match('example/app.js',{
  parser:fis.plugin('browserify',{
    option:{

    }
  })
})
