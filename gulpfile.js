const gulp = require('gulp')
const sass = require('gulp-sass')

const scss = (cb) => {
    return gulp.src('./src/scss/**/*.scss')
      .pipe(sass()) // Using gulp-sass
      .pipe(gulp.dest('./public/styles'))
}

const moveFiles = (cb) => {
    return gulp.src('./public/**/*')
        .pipe(gulp.dest('./dist'))
}

exports.build = async () => {
  await gulp.series(scss, moveFiles)()
}

// Export main task
exports.default = () => {
    // For initial task
    gulp.series(scss)()

    gulp.watch('./src/scss/**/*.scss', gulp.parallel(scss))
    gulp.watch('./public/**/*', gulp.series(moveFiles))
}