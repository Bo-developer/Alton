const gulp = require('gulp')

const styles = require('./styles')
const pug2html = require('./pug2html')
const script = require('./script')
const images = require('./images')
const copyDependencies = require('./copyDependencies')

const server = require('browser-sync').create()

module.exports = function serve(cb) {
  server.init({
    server: 'build',
    notify: false,
    open: true,
    cors: true
  })

  gulp.watch('src/img/*/*.{gif,png,jpg,svg,webp}', gulp.series(images)).on('change', server.reload)
  gulp.watch('src/styles/**/*.scss', gulp.series(styles, cb => gulp.src('build/css').pipe(server.stream()).on('end', cb)))
  gulp.watch('src/js/**/*.js', gulp.series(script)).on('change', server.reload)
  gulp.watch('src/pages/**/*.pug', gulp.series(pug2html))
  gulp.watch('build/*.html').on('change', server.reload)

  gulp.watch('package.json', gulp.series(copyDependencies)).on('change', server.reload)

  return cb()
}

