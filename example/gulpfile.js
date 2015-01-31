var gulp = require('gulp'),
    layout = require('../index.js');

gulp.task('default', function(){
  gulp.src([ 'index.html', 'about.html' ]).
  pipe(layout('layout.html')).
  pipe(gulp.dest('dest'));
});
