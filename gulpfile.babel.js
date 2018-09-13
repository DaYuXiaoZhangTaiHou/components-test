'use strict';

import yargs from 'yargs';

import gulp from 'gulp';
import gutil from 'gulp-util';

import webpack from 'webpack';

gulp.task('webpack', (callback) => {

    let args = yargs.argv;
    let prefix = args._.length === 0 ? '' : '.' + args._[0];
    if (prefix == '.webpack') {
        prefix = '';
    }

    var cfg = require('./webpack' + prefix + '.config');
    webpack(cfg, function (err, stats) {
        if (err) {
            throw new gutil.PluginError("webpack", err);
        }

        callback();
    });
});

gulp.task('default', ['webpack'], () => {});

gulp.task('pre', ['webpack'], () => {});

gulp.task('prod', ['webpack'], () => {});