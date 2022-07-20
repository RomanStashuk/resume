'use strict';

import gulp from 'gulp';

import path from '../config/paths.js';

// Plugins
import loadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';

const gp = loadPlugins();

// Копіювання каталогу Video
export default () => {
  return gulp.src(path.copyVideo.src)
    .pipe(gp.plumber({
      errorHandler: gp.notify.onError(error => ({
        title: 'Copy Video',
        message: error.message
      }))
    }))
    .pipe(gp.newer(path.copyVideo.dest))
    .pipe(gulp.dest(path.copyVideo.dest))
    .pipe(browserSync.stream());
};
