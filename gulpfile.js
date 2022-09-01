'use strict'

const gulp = require('gulp')
const requireDir = require('require-dir')
const tasks = requireDir('./.gulp/tasks')
const envConfig = require('dotenv').config()
const env = envConfig.parsed
const browserSync = require('browser-sync')

function reload(cb) {
  browserSync.reload()
  cb()
}

// Notifications
gulp.task('notification:ready', (cb) => {
  tasks.notification.default('Canvas', 'Ready...🦉')
  cb()
})

gulp.task('notification:images', (cb) => {
  tasks.notification.default('Images', 'Saved...☄️')
  cb()
})

// Beautify
gulp.task('beautify:build', (cb) => {
  tasks.buautify.html(env)
  cb()
})

// Nunjucks
gulp.task('nunjucks:dev', (cb) => {
  if (process.argv[3] && process.argv[3] === 'rtl') {
    tasks.nunjucks.rtl(env)
  } else {
    tasks.nunjucks.dev(env)
  }
  cb()
})

gulp.task('nunjucks:rtl', (cb) => {
  tasks.nunjucks.rtl(env)
  cb()
})

gulp.task('nunjucks:build', (cb) => {
  tasks.nunjucks.build(env)
  cb()
})

// Inliner
gulp.task('inline:css', (cb) => {
  tasks.inline.css(env)
  cb()
})

gulp.task('inline:js', (cb) => {
  tasks.inline.js(env)
  cb()
})

// Styles
gulp.task('styles:dev', (cb) => {
  tasks.styles.dev(env)
  cb()
})

gulp.task('styles:build', (cb) => {
  tasks.styles.build(env)
  cb()
})

// Scripts
gulp.task('scripts:jshint', (cb) => {
  tasks.scripts.jshint(env)
  cb()
})

gulp.task('scripts:js', (cb) => {
  tasks.scripts.js(env)
  cb()
})

gulp.task('scripts:dev', gulp.series(
  ['scripts:js'],
  ['scripts:jshint']
))

gulp.task('scripts:build', (cb) => {
  tasks.scripts.build(env)
  cb()
})

// Browsersync
gulp.task('browserSync', (cb) => {
  tasks.browserSync.default(env)
  cb()
})

// Images
gulp.task('image:min', (cb) => {
  tasks.imageMin.dev(env)
  cb()
})

gulp.task('image:clean', (cb) => {
  tasks.imageMin.clean(env)
  cb()
})

gulp.task('images', gulp.series(
  ['image:clean'],
  ['image:min'],
  ['notification:images']
))

// Watch
gulp.task('watch:dev', (cb) => {
  gulp.watch(
    [
      env.NJ_TEMPLATES,
      env.NJ_PAGES,
      env.NJ_PARTIALS,
      env.NJ_MACROS,
      env.NJ_DATA
    ],
    gulp.series(
      ['nunjucks:dev'],
      reload
    )
  )
  gulp.watch(
    [
      env.JS_FILES
    ],
    gulp.series(
      ['scripts:dev'],
      reload
    )
  )
  gulp.watch(
    [
      env.SCSS_FILES
    ],
    gulp.series(
      ['styles:dev']
    )
  )
  gulp.watch(
    env.IMG_FILES,
    gulp.series(
      ['images'],
      reload
    )
  )
  cb()
})

// // Build
gulp.task('build', gulp.series(
  ['images'],
  ['nunjucks:build'],
  ['scripts:build'],
  ['styles:build'],
  ['inline:js'],
  ['inline:css'],
  ['beautify:build']
))

// Default
gulp.task('default', gulp.series([
  ['images'],
  ['nunjucks:dev'],
  ['browserSync'],
  ['scripts:dev'],
  ['styles:dev'],
  ['notification:ready'],
  ['watch:dev']
]))
