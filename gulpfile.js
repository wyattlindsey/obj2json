var gulp = require('gulp');
var browserify = require('browserify');
var watchify = require('watchify');
var uglify = require('gulp-uglify');
var streamify = require('gulp-streamify');
var babelify = require('babelify');
var babel = require('babel-core/register');
var source = require('vinyl-source-stream');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var concat = require('gulp-concat');

gulp.task('default', function() {
  runBrowserifyTask({
    watch: true,
    dest: './server/dist',
    uglify: false
  });

  gulp.start('sass', 'copy', 'browser-sync');
  gulp.watch('./dist/*.js', browserSync.reload());
  gulp.watch('./server/client/app/**/*.scss', ['sass']);
  gulp.watch('./server/dist/*.css', browserSync.reload());
});

var runBrowserifyTask = function(options) {
  var vendorBundler = browserify({
    debug: true
  })
    .require([
      'react',
      'react-dom',
      'three-obj',
      'superagent',
      'react-dropzone'
    ]);

  var bundler = browserify({
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: true
  })
    .require(require.resolve('./client/app/app.js'), { entry: true })
    .transform('babelify', { presets: ['es2015', 'react'] })
    .external([
      'react',
      'react-dom',
      'three-obj',
      'superagent',
      'react-dropzone'
    ]);

  var rebundle = function() {
    bundler.bundle()
      .on('error', function(err) {
        console.log(err)
      })
      .pipe(source('bundle.js'))
      .pipe(rename('app.js'))
      .pipe(gulp.dest(options.dest));
  }

  if (options.watch) {
    console.log('hello');
    bundler = watchify(bundler, {
      poll: true
    });
    bundler.on('update', rebundle);
  }

  vendorBundler.bundle()
    .pipe(source('vendors.js'))
    .pipe(gulp.dest(options.dest));

  return rebundle();
}

gulp.task('sass', function() {
  gulp.src('./client/app/**/*.scss')
    .pipe(concat('styles.scss'))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./server/dist'));
});

gulp.task('copy', function() {
  gulp.src('./client/index.html')
    .pipe(gulp.dest('./server/dist'));
});

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: './server/dist'
    }
  });
});