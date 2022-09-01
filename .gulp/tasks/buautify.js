const gulp = require('gulp');
const beautify = require('gulp-jsbeautifier');

module.exports = {
  html: (env) => {
    setTimeout(() => {
      return gulp.src(env.INLINE_FILES)
        .pipe(beautify({
            html: {
              indent_size: 2,
              max_preserve_newlines: 1
            }
        }))
        .pipe(gulp.dest(env.INLINE_DIST));
    }, 4000);
  }
};
