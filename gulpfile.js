var gulp = require('gulp');
var browserify = require('browserify');
var watchify = require('watchify');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var streamify = require('gulp-streamify');
var babel = require('babel-core/register');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var rename = require('gulp-rename');
var browserSync = require('browser-sync').create();

gulp.task('default', function() {
  runBrowserifyTask({
    watch: true,
    dest: './dist',
    uglify: false
  });

  gulp.start('sass', 'copy', 'browser-sync');
  gulp.watch('./dist/*.js', browserSync.reload());
  gulp.watch('./client/app/**/*.scss', ['sass']);
  gulp.watch('./dist/*.css', browserSync.reload());
});

var runBrowserifyTask = function(options) {
  var vendorBundler = browserify({
    debug: true
  })
    .require([
      'react',
      'react-dom'
    ]);

  var bundler = browserify({
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: true
  })
    .require(require.resolve('./client/app/app.js'), { entry: true } )
    .transform('babelify', { presets: ['es2015', 'react'] })
    .external([
      'react',
      'react-dom'
    ]);

  var rebundle = function() {
    bundler.bundle()
      .on('error', function(err) {
        console.log(err);
      })
      .pipe(source('bundle.js'))
      .pipe(rename('app.js'))
      .pipe(gulp.dest(options.dest));
  }

  if (options.watch) {
    bundler = watchify(bundler);
    bundler.on('update', rebundle);
  }

  vendorBundler.bundle()
    .pipe(source('vendors.js'))
    .pipe(gulp.dest(options.dest));

  return rebundle();
};

gulp.task('sass', function() {
  gulp.src('./client/app/**/*.scss')  //concat?
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});

gulp.task('copy', function() {
  gulp.src('./client/index.html')
    .pipe(gulp.dest('./dist'));
});

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: './dist'
    }
  });
});