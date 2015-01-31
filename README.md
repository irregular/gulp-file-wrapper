gulp-file-wrapper
=================

[gulp-file-wrapper](https://github.com/irregular/gulp-file-wrapper) allows you to inject
a file within another.

layout.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
  %%yield%%
</body>
</html>
```

index.html
```html
<p>INDEX.HTML</p>
```
about.html
```html
<p>ABOUT.HTML</p>
```

gulpfile.js
```js
var gulp = require('gulp'),
    layout = require('gulp-file-wrapper');

gulp.task('default', function(){
  gulp.src([ 'index.html', 'about.html' ]).
  pipe(layout('layout.html')).
  pipe(gulp.dest('dest'));
});
```
