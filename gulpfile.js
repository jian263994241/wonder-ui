var preset = require('babel-preset');
var del = require('del');
var gulp = require('gulp');
var babel = require('gulp-babel');

var paths = {
  scripts: {
    core: {
      src: ['src/core/**/*.js', '!**/node_modules/**'],
      dest: 'npm-packages/wonder-ui-core',
      copylist: [
        'src/core/package.json',
        'src/core/README.md'
      ]
    },
    router: {
      src: ['src/router/**/*.js', '!**/node_modules/**'],
      dest: 'npm-packages/wonder-ui-router',
      copylist: [
        'src/router/package.json',
        'src/router/README.md'
      ]
    },
    utils: {
      src: ['src/utils/src/**/*.js', '!**/node_modules/**'],
      dest: 'npm-packages/wonder-ui-utils',
      copylist: [
        'src/utils/package.json',
        'src/utils/README.md'
      ]
    },
    styles: {
      src: ['src/styles/**/*.js', '!**/node_modules/**'],
      dest: 'npm-packages/wonder-ui-styles',
      copylist: [
        'src/styles/package.json',
        'src/styles/README.md'
      ]
    }
  }
}

function clean() {
  // You can use multiple globbing patterns as you would with `gulp.src`,
  // for example if you are using del 2.0 or above, return its promise
  return del([ 'package' ]);
}

function watch() {
  gulp.watch(paths.scripts.core.src, scripts);
}

function scripts(target = 'core') {
  return gulp.src(paths.scripts[target].src, { sourcemaps: false })
    .pipe(babel({ 
      presets: [
        [preset, {
          targets: [
            'ie >= 9',
            'edge >= 14',
            'firefox >= 52',
            'chrome >= 49',
            'safari >= 10',
            'node 8.0',
          ]
        }]
      ]
    }))
    .pipe(gulp.dest(paths.scripts[target].dest));
}

function cpoyInfo(target = 'core'){
  return gulp.src(paths.scripts[target].copylist)
    .pipe(gulp.dest(paths.scripts[target].dest));
}


gulp.task('build:core', gulp.series(()=>cpoyInfo('core'), ()=>scripts('core')));
gulp.task('build:router', gulp.series(()=>cpoyInfo('router'), ()=>scripts('router')));
gulp.task('build:utils', gulp.series(()=>cpoyInfo('utils'), ()=>scripts('utils')));
gulp.task('build:styles', gulp.series(()=>cpoyInfo('styles'), ()=>scripts('styles')));

gulp.task('default', gulp.series(cpoyInfo, scripts, watch));
