/* eslint-disable no-console */
const gulp = require('gulp');
const gulpPromiseAll = require('gulp-all');
const { src, dest } = require('gulp');

const copyFiles = () => src('src/*.js').pipe(dest('dist/'));

gulp.task('default', () => gulpPromiseAll(copyFiles()).then(
  () => {
    console.log('SUCCESS');
  },
  (err) => {
    console.error('ERROR:', err);
  },
));
