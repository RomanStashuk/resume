'use strict';

import gulp from 'gulp';

import path from '../config/paths.js';

// Plugins
import loadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';

const gp = loadPlugins();

// Копіювання каталогу Favicon
export default () => {
  return gulp.src(path.copyFavicon.src)
    .pipe(gp.plumber({
      errorHandler: gp.notify.onError(error => ({
        title: 'Copy Favicon',
        message: error.message
      }))
    }))
    .pipe(gp.newer(path.copyFavicon.dest))
    .pipe(gulp.dest(path.copyFavicon.dest))
    .pipe(browserSync.stream());
};
