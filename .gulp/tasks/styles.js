const gulp = require('gulp');
const requireDir = require('require-dir');
const tasks = requireDir('./');
const sourcemaps = require('gulp-sourcemaps');
const plumber = require('gulp-plumber');
const sass = require('gulp-dart-sass');
const autoprefixer = require('gulp-autoprefixer');
const filter = require('gulp-filter');
const cleanCss = require('gulp-clean-css');
const browserSync = require('browser-sync');

function scssError(e) {
  tasks.notification.default('❌ CSS Fail ❌', 'Check terminal', true);
};

module.exports = {
  dev: (env) => {
    return gulp.src(env.SCSS_APP)
      .pipe(sourcemaps.init())
      .pipe(plumber({ errorHandler: scssError }))
      .pipe(sass()
        .on('error', sass.logError)
      )
      .pipe(autoprefixer())
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(env.CSS_DEST))
      .pipe(filter(['**/*.css']))
      .pipe(browserSync.reload({stream:true}));
  },
  build: (env) => {
    return gulp.src(env.SCSS_APP)
      .pipe(plumber({ errorHandler: scssError }))
      .pipe(sass()
        .on('error', sass.logError)
      )
      .pipe(autoprefixer())
      .pipe(cleanCss())
      .pipe(gulp.dest(env.CSS_DEST));
  },
};
