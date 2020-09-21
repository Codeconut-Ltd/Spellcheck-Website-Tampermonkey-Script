/* eslint-disable no-console */
const gulp = require('gulp');
const gulpPromiseAll = require('gulp-all');
const replace = require('gulp-replace');
const { src, dest } = require('gulp');

const copyFiles = () => src('src/*.js').pipe(dest('dist/'));

gulp.task('result', () => {
  gulp.src(['templates/tampermonkey-userscript.js']).pipe(replace('#SCRIPT#', 'XXX')).pipe(gulp.dest('build/'));
});

gulp.task('default', () => gulpPromiseAll(copyFiles()).then(
  () => {
    console.log('SUCCESS');
  },
  (err) => {
    console.error('ERROR:', err);
  },
));
