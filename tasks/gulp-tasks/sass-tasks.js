// Area23 - SASS Tasks
// v3.0.0

// Purpose:
// Compile SASS, autoprefix css, & sourcemap
// Watch SASS

// DEPENDENCIES:
// uses: browser-tasks.js
// NOTE: `gulp-autoprefixer` uses key browserslist in package.json
// ^^^^ read more at https://github.com/postcss/autoprefixer#options

// 1. PACKAGES
// 2. VARIABLES
// 3. TASKS

'use strict';

// ================= //
// 1. PACKAGES       //
// ================= //

const gulp          = require('gulp');
const sass          = require('gulp-sass')(require('sass'));
const sassGlob      = require('gulp-sass-glob');
const autoprefixer  = require('gulp-autoprefixer');
const sourcemaps    = require('gulp-sourcemaps');
const touch         = require('gulp-touch-cmd');
const rename        = require('gulp-rename');


// ================= //
// 2. VARIABLES      //
// ================= //

const config = require('../config-workflow.json');


// ================= //
// 3. TASKS          //
// ================= //

gulp.task('compile_sass', function (done) {
 return gulp.src(config.src.sassSrc)
  .pipe(sourcemaps.init())
  .pipe(sassGlob())
  .pipe(sass({
    outputStyle: 'compressed',
    includePaths: [
      './node_modules/bootstrap-scss/'
    ]
  })
  .on('error', sass.logError))
  .pipe(autoprefixer())
  .pipe(sourcemaps.write('.'))
  .pipe(rename(config.build.cssName))
  .pipe(gulp.dest(config.build.css))
  .pipe(touch());
  done();
});

gulp.task('watch_sass', function() {
  return gulp.watch(config.src.sassSrc, gulp.series('compile_sass', 'browser_reload'));
});

gulp.task('watch_sass2', function() {
  return gulp.watch(config.src.sassSrc2, gulp.series('compile_sass', 'browser_reload'));
});