fis.project.addIgnore(['src/**']);

fis.match('example/*/*.js',{
  parser: fis.plugin('browserify')
})
