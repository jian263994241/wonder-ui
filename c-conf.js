fis.project.addIgnore(['docs/*']);

fis.match('example/app.js',{
  parser: fis.plugin('browserify')
})

fis.match('src/**', {
  release: false
})
