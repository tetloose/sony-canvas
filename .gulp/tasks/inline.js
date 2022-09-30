const gulp = require('gulp');
const replace = require('gulp-replace');
const fs = require('fs');

module.exports = {
  css: (env) => {
    setTimeout(() => {
      return gulp.src(env.INLINE_FILES)
        .pipe(replace(/<link rel="stylesheet" href="stylesheet\/app.css">/, function() {
          const styles = fs.readFileSync(env.INLINE_CSS, 'utf8');
          return `<style>${styles}</style>`;
        }))
        .pipe(gulp.dest(env.INLINE_DIST));
    }, 6000);
  },
  js: (env) => {
    setTimeout(() => {
      return gulp.src(env.INLINE_FILES)
        .pipe(replace(/<script src="javascript\/app.js"><\/script>/, function() {
          const scripts = fs.readFileSync(env.INLINE_JS, 'utf8');
          return `<script>(function() {${scripts}})();</script>`;
        }))
        .pipe(gulp.dest(env.INLINE_DIST));
    }, 3000);
  }
}
