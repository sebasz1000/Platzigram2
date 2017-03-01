var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename')
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream')

gulp.task('styles', function(){  //task transform scss to css
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

gulp.task('scripts', function(){
  
  browserify('./src/index.js')
  .transform(babelify , {presets: ['es2015']})
  .bundle()
  .pipe(source('index.js'))  //vinylsource stream 
  .pipe(rename('app.js'))
  .pipe(gulp.dest('public'));
})

//runs all task listed by default
gulp.task('default', ['styles','assets','scripts']);
