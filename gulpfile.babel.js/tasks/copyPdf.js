'use strict';

import gulp from 'gulp';

import path from '../config/paths.js';

// Plugins
import loadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';

const gp = loadPlugins();

// Копіювання pdf файлів
export default () => {
  return gulp.src(path.copyPdf.src)
    .pipe(gp.plumber({
      errorHandler: gp.notify.onError(error => ({
        title: 'Copy pdf',
        message: error.message
      }))
    }))
    .pipe(gp.newer(path.copyPdf.dest))
    .pipe(gulp.dest(path.copyPdf.dest))
    .pipe(browserSync.stream());
};
