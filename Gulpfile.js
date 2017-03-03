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
  .on('error', function(error){ console.log(error); this.emit('end')})
  .pipe(source('index.js'))  //vinylsource stream 
  .pipe(rename('app.js'))
  .pipe(gulp.dest('public'));
})





gulp.task('watch', ['styles', 'scripts','assets'], function(){
  
  gulp
    .watch(['index.scss', './src/**' , './assets/*.*'], ['styles', 'scripts','assets']).on('change', function(event){
  console.log(event.path + " " + event.type);
});  //watch ./src/** to watch all templates.js an index.js in src
  
})


//runs all task listed by default  ** npm build **
gulp.task('default', ['styles', 'scripts','assets']);