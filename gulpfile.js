var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var minCss = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var server = require('gulp-webserver');
var htmlmin = require('gulp-htmlmin');
var url = require('url');
var fs = require('fs');
var path = require('path');
// var babel = require('gulp-babel');

gulp.task('devScss', function() {
    return gulp.src('./src/scss/style.scss')
        .pipe(autoprefixer({ browsers: ['last 2 versions'] }))
        .pipe(scss())
        .pipe(gulp.dest('./src/css'))
});

gulp.task('watch', function() {
    gulp.watch('./src/scss/style.scss', gulp.series('devScss'))
})
gulp.task('dev', gulp.parallel('devScss', 'watch'));