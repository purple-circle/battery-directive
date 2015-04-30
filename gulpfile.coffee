gulp = require("gulp")
plumber = require('gulp-plumber')

gutil = require("gulp-util")
coffee = require("gulp-coffee")

# Code linting
coffeelint = require('gulp-coffeelint')

# Code minification
concat = require("gulp-concat")
uglify = require("gulp-uglify")

# Angular
protractor = require("gulp-protractor").protractor
ngTemplates = require("gulp-ng-templates")
ngAnnotate = require('gulp-ng-annotate')

# Notifications for OSX
notify = require("gulp-notify")

errorHandler = notify.onError("Error: <%= error.message %>")



gulp.task "test", ->
  gulp
    .src(["test/specs/**/*.js"])
    .pipe(protractor(
      configFile: "test/conf.js"
    ))
    .pipe(plumber({errorHandler}))
    .on('error', gutil.log)
    .on('error', gutil.beep)

gulp.task "partials", (done) ->
 gulp
    .src("src/partials/**/*.html")
    .pipe(ngTemplates('batteryTemplates'))
    .pipe(gulp.dest("tmp/templates"))


gulp.task "concat-dist", (done) ->
 gulp
    .src("tmp/**/*.js")
    .pipe(plumber({errorHandler}))
    .on('error', gutil.log)
    .on('error', gutil.beep)
    .pipe(concat("battery-level.js"))
    .pipe(gulp.dest("./dist"))


gulp.task "build-min", ["concat-dist"], (done) ->
 gulp
    .src("tmp/**/*.js")
    .pipe(plumber({errorHandler}))
    .on('error', gutil.log)
    .on('error', gutil.beep)
    .pipe(concat("battery-level.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest("./dist"))


gulp.task "build", ["coffee", "partials"], ->
  gulp.start("build-min")
  gutil.log "Build complete"


gulp.task "ci", ["build-min", "build"], ->
  gulp.start("test")


gulp.task "coffeelint", ->
 gulp
    .src("src/**/*.coffee")
    .pipe(plumber({errorHandler}))
    .pipe(coffeelint())
    .pipe(coffeelint.reporter())
    .pipe(coffeelint.reporter('fail'))
    .on('error', gutil.log)
    .on('error', gutil.beep)

gulp.task "coffee", ->
 gulp
    .src("src/**/*.coffee")
    .pipe(plumber({errorHandler}))
    .pipe(coffee())
    .on('error', gutil.log)
    .on('error', gutil.beep)
    .pipe(ngAnnotate())
    .pipe(concat("battery-level.js"))
    .pipe(gulp.dest("tmp"))



gulp.task "watch", ->
  gulp.watch [
    "src/**/*.coffee"
    ], ["coffeelint", "coffee"]

  gulp.watch [
    "src/partials/**/*.html"
  ], ["partials"]

gulp.task "default", ->
  gutil.log "Available commands: watch, coffee, coffeelint, partials, build"
