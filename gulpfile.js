var preset = require('babel-preset');
var del = require('del');
var gulp = require('gulp');
var babel = require('gulp-babel');

var paths = {
  scripts: {
    core: {
      src: ['src/core/**/*.js'],
      dest: 'package/core',
      packageInfo: 'src/core/package.json'
    }
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
  return gulp.src(paths.scripts.core.src, { sourcemaps: false })
    .pipe(babel({ presets: [ preset ] }))
    .pipe(gulp.dest(paths.scripts.core.dest));
}

function cpoyInfo(){
  return gulp.src(paths.scripts.core.packageInfo)
    .pipe(gulp.dest(paths.scripts.core.dest));
}

gulp.task('build', gulp.series(clean, cpoyInfo, scripts));

gulp.task('default', gulp.series(clean, cpoyInfo, scripts, watch));
