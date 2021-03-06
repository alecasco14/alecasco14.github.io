var gulp = require('gulp');
var runSequence = require('run-sequence');
var minifyCss = require('gulp-minify-css');
var minifyHTML = require('gulp-minify-html');
var minify = require('gulp-minify');

var distPath = './dist';

gulp.task('minifyCSS', function() {
     return gulp.src('src/css/*.css')
    .pipe(minifyCss())
    .pipe(gulp.dest(distPath));
});

gulp.task('minify-html', function() {
  return gulp.src('src/*.html')
    .pipe(minifyHTML({ empty: true }))
    .pipe(gulp.dest('./'));
});

gulp.task('build', function (done) {
    runSequence([
        'minifyCSS',
        'minify-html'
    ], done);
});

gulp.task('dev', [
    'build'
]);

gulp.task('default', ['dev']);