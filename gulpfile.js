const gulp = require('gulp')
const sass = require('gulp-sass')

const scss = (cb) => {
    return gulp.src('./src/scss/**/*.scss')
      .pipe(sass()) // Using gulp-sass
      .pipe(gulp.dest('./public/styles'))
}

const moveFile = (cb) => {
    return gulp.src('./public/**/*')
        .pipe(gulp.dest('./dist'))
}

// Export main task
exports.default = () => {
    gulp.watch('./src/scss/**/*.scss', gulp.parallel(scss))
    gulp.watch('./public/**/*', gulp.series(moveFile))
}