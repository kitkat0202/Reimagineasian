// Area23 -- Handlebars Web Starter Kit
// v3.0.0

// 1. PACKAGES
// 2. VARIABLES
// 3. IMPORTS
// 4. TASKS

'use strict';

// ============================= //
// ============================= //
//      !! Gulp 4.0.0 !!         //
// ============================= //
// ============================= //

// ================= //
// 1. PACKAGES       //
// ================= //

const gulp          = require('gulp');
const requireDir    = require('require-dir');
const fs            = require('fs')
const path          = require('path')

// ================= //
// 2. VARIABLES      //
// ================= //

const config = require('./tasks/config-workflow.json');


// Creates the public folder
const publicPath = path.resolve(process.cwd(),"public");
if( ! fs.existsSync(publicPath) ) {
  fs.mkdirSync(publicPath)
}


// ================= //
// 3. IMPORTS        //
// ================= //

// import tasks using the require-dir package
requireDir('./tasks/gulp-tasks');

// NOTE: ADD or REMOVE tasks by placing modules in the directory above
// PLEASE note any dependencies

// TODO: possibly replace `require-dir` and use node module.exports methods

// ================= //
// 4. TASKS          //
// ================= //

// NOTE: USE `gulp --tasks` to list out all tasks


gulp.task('default',
  gulp.series('compile_sass', 'compile_js', 'move_img', 'move_json', 'compile_handlebars', 'browser_serve',
    gulp.parallel('watch_hbs', 'watch_sass', 'watch_sass2', 'watch_js', 'watch_img', 'watch_json', 'watch_assets')
  )
);

gulp.task('build',
  gulp.series('compile_sass', 'compile_js', 'move_img', 'move_json', 'compile_handlebars')
);