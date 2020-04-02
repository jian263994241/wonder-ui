const preset = require('babel-preset');
const del = require('del');
const gulp = require('gulp');
const babel = require('gulp-babel');
const reactDocs = require('react-docgen');
const through2 = require('through2');
const fs = require('fs');

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
    icons: {
      src: ['packages/icons/src/**/*.js', '!**/node_modules/**'],
      dest: 'npm-packages/wonder-ui-icons',
      copylist: [
        'packages/icons/package.json',
        'packages/icons/README.md'
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
      src: ['packages/styles/src/**/*.js', '!**/node_modules/**'],
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


function createTask(target){
  return gulp.series(
    function cpoyInfo(){
      return gulp.src(paths.scripts[target].copylist)
        .pipe(gulp.dest(paths.scripts[target].dest));
    },
    function docgen() {
      return gulp.src(paths.scripts[target].src, { sourcemaps: false })
      .pipe(through2.obj(function(file, _, cb) {
      
        if (file.isBuffer()) {
          try {
            const doc = reactDocs.parse(file.contents.toString())
            fs.writeFileSync(
              'docs/api/' + doc.displayName + '.json', 
              JSON.stringify(doc, null, 2)
            );
            
          } catch (error) {
            
          }
        }
        cb(null, file);
        
      }))


    },
    function scripts() {
      return gulp.src(paths.scripts[target].src, { sourcemaps: false })
      .pipe(babel({ 
        presets: [preset]
      }))
      .pipe(gulp.dest(paths.scripts[target].dest));
    }
  )
}

gulp.task('clean', clean);
gulp.task('build:core', createTask('core') );
gulp.task('build:icons', createTask('icons', false) );
gulp.task('build:router',createTask('router') );
gulp.task('build:utils', createTask('utils') );
gulp.task('build:styles', createTask('styles') );