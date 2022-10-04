const gulp = require('gulp');
const requireDir = require('require-dir');
const tasks = requireDir('./');
const sourcemaps = require('gulp-sourcemaps');
const plumber = require('gulp-plumber');
const filter = require('gulp-filter');
const jshint = require('gulp-jshint');
const concat = require('gulp-concat');
const babel = require('gulp-babel');

function jsError() {
  tasks.notification.default('❌ JS Fail ❌', 'Check terminal', true);
};

module.exports = {
  jshint: (env) => {
    return gulp.src(env.JS_FILES)
    .pipe(jshint('.jshintrc'))
    .pipe(plumber({ errorHandler: jsError }))
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'))
    .pipe(filter(['**/*.js']));
  },
  js: (env) => {
    return gulp.src(env.JS_FILES)
      .pipe(sourcemaps.init())
      .pipe(concat('app.js'))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(env.JS_DEST));
  },
  build: (env) => {
    return gulp.src(
      env.JS_FILES
    )
    .pipe(babel({presets: [['@babel/preset-env', {modules: false}]] }))
    .pipe(concat('app.js'))
    .pipe(gulp.dest(env.JS_DEST));
  }
};
