const gulp = require('gulp');
const nunjucksRender = require('gulp-nunjucks-render');
const plumber = require('gulp-plumber');
const data = require('gulp-data');
('gulp-nunjucks-render');
const fs = require('fs');

function nunjucksError(e) {
  console.log(`❌ Nunjucks ❌\n ${e}`);
};

module.exports = {
  dev: (env) => {
    return gulp.src(env.NJ_PAGES)
      .pipe(plumber({
        errorHandler: nunjucksError
      }))
      .pipe(data(function() {
        return JSON.parse(fs.readFileSync(env.NJ_DATA));
      }))
      .pipe(nunjucksRender({
        path: env.NJ_PATH,
        data: {
          canvas_css: env.CANVAS_CSS_LTR
        }
      }))
      .pipe(gulp.dest(env.NJ_DEST));
  },
  rtl: (env) => {
    return gulp.src(env.NJ_PAGES)
      .pipe(plumber({
        errorHandler: nunjucksError
      }))
      .pipe(data(function() {
        return JSON.parse(fs.readFileSync(env.NJ_DATA));
      }))
      .pipe(nunjucksRender({
        path: env.NJ_PATH,
        data: {
          canvas_css: env.CANVAS_CSS_RTL,
          dir: 'rtl'
        }
      }))
      .pipe(gulp.dest(env.NJ_DEST));
  },
  build: (env) => {
    return gulp.src(env.NJ_PAGES)
      .pipe(plumber({
        errorHandler: nunjucksError
      }))
      .pipe(data(function() {
        return JSON.parse(fs.readFileSync(env.NJ_DATA));
      }))
      .pipe(nunjucksRender({
        path: env.NJ_PATH
      }))
      .pipe(gulp.dest(env.NJ_DEST));
  }
};
