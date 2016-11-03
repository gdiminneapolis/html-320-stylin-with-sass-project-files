// task runner -- use this on Windows
'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var help = require('gulp-task-listing');
var browserSync = require('browser-sync');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function () {
   return gulp.src(
       [
           'sass/**/*.scss',
           'sass/**/*.sass'
       ])
       .pipe(sourcemaps.init())
       .pipe(sass().on('error', sass.logError))
       .pipe(sourcemaps.write())
       .pipe(gulp.dest('css'))
       .pipe(browserSync.stream())
});

gulp.task('build', ['sass']);

gulp.task('serve', ['build'], function(){
    browserSync.init({
        server: '.'
    });
    gulp.watch([
            './*.html',
            './sass/**/*.scss',
            './sass/**/*.sass'
        ],
        ['build'])
});
gulp.task('default', ['serve']);
gulp.task('help', help);