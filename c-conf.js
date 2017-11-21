fis.project.addIgnore(['docs/*']);

fis.match('example/*/*.js',{
  parser: fis.plugin('browserify')
})

fis.match('src/**', {
  release: false
})
