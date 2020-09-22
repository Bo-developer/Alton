const gulp = require('gulp')

module.exports = function images() {
  return gulp.src('src/img/*')
    .pipe(gulp.dest('build/img'))
}
