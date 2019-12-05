var preset = require('babel-preset');
var del = require('del');
var gulp = require('gulp');
var babel = require('gulp-babel');

var paths = {
  scripts: {
    core: {
      src: ['packages/core/**/*.js', '!**/node_modules/**'],
      dest: 'npm-packages/wonder-ui-core',
      copylist: [
        'packages/core/package.json',
        'packages/core/README.md'
      ]
    },
    router: {
      src: ['packages/router/src/**/*.js', '!**/node_modules/**'],
      dest: 'npm-packages/wonder-ui-router',
      copylist: [
        'packages/router/package.json',
        'packages/router/README.md'
      ]
    },
    utils: {
      src: ['packages/utils/src/**/*.js', '!**/node_modules/**'],
      dest: 'npm-packages/wonder-ui-utils',
      copylist: [
        'packages/utils/package.json',
        'packages/utils/README.md'
      ]
    },
    styles: {
      src: ['packages/styles/**/*.js', '!**/node_modules/**'],
      dest: 'npm-packages/wonder-ui-styles',
      copylist: [
        'packages/styles/package.json',
        'packages/styles/README.md'
      ]
    }
  }
}

function clean() {
  // You can use multiple globbing patterns as you would with `gulp.src`,
  // for example if you are using del 2.0 or above, return its promise
  return del([ 'npm-packages' ]);
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