var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename')
gulp.task('styles', function(){
    gulp
    .src('index.scss')
    .pipe(sass())
    .pipe(rename('app.css'))
    .pipe(gulp.dest('public'));
})

//takes all files from Assets folder to Public folder
gulp.task('assets', function(){  
  gulp
    .src('assets/*')
    .pipe(gulp.dest('public'));
})

//runs all task listed by default
gulp.task('default', ['styles','assets']);