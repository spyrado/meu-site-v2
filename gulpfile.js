'use strict';

const gulp = require('gulp')
  ,server = require('gulp-server-livereload')
  ,sass = require('gulp-sass')
  ,htmlmin = require('gulp-htmlmin')
  ,imagemin = require('gulp-imagemin')
  ,cleanCSS = require('gulp-clean-css');
  
  sass.compiler = require('node-sass');

  gulp.task('default', gulp.parallel(minificaCss, minificaHtml, minificaImg));

  function minificaCss(){
    return gulp.src('dist/css/estilos.css')
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(gulp.dest('dist/css'));
  }

  function minificaHtml(){
    return gulp.src('src/html/*.html')
      .pipe(htmlmin({ collapseWhitespace: true }))
      .pipe(gulp.dest('./'));
  }
  
  function minificaImg(){  
    return gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
  }

  gulp.task('sass', function () {
    return gulp.src('src/scss/estilos.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./dist/css/'));
  });
   
  gulp.task('sass:watch', function () {
    gulp.watch('src/scss/**/*.scss', gulp.series('sass'));
  });

// INICIA UM SERVIDOR COM LIVERELOAD
gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(server({
      livereload: true,
      directoryListing: true,
      open: true,
      host: "192.168.15.10"
    }));
});