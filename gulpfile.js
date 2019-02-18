var gulp = require('gulp');
var babel = require('gulp-babel');
var createConfig = require('js-start/plugin/babelify/createConfig')
var del = require('del');
var pkg = require('./package.json');

var paths = {
  scripts: {
    src: ['src/**/*.js'],
    dest: 'package'
  }
}

function clean() {
  // You can use multiple globbing patterns as you would with `gulp.src`,
  // for example if you are using del 2.0 or above, return its promise
  return del([ 'package' ]);
}

function watch() {
  gulp.watch(paths.scripts.src, scripts);
}

function scripts() {
  return gulp.src(paths.scripts.src, { sourcemaps: false })
    .pipe(babel(createConfig({react: true})))
    .pipe(gulp.dest(paths.scripts.dest));
}

function cpoyInfo(){
  return gulp.src('./package.json')
    .pipe(gulp.dest('./package'));
}

gulp.task('build', gulp.series(clean, cpoyInfo, scripts));

gulp.task('default', gulp.series(clean, cpoyInfo, scripts, watch));
