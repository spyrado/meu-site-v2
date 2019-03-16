'use strict';

const gulp = require('gulp')
  ,server = require('gulp-server-livereload')
  ,sass = require('gulp-sass');

  sass.compiler = require('node-sass');

  
  gulp.task('sass', function () {
    return gulp.src('./src/scss/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./dist/css'));
  });
   
  gulp.task('sass:watch', function () {
    gulp.watch('./src/scss/**/*.scss', ['sass']);
  });

// INICIA UM SERVIDOR COM LIVERELOAD
gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(server({
      livereload: true,
      directoryListing: true,
      open: true
    }));
});