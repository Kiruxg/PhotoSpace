var gulp = require('gulp')
var gutil = require('gulp-util');
var sass = require('gulp-sass');

gulp.task('default', ['styles'])

gulp.task('styles', function() {
 gulp.src('emailui/style.sass')
  .pipe(sass())
    .on('error', gutil.log)
  .pipe(gulp.dest('css'))
});