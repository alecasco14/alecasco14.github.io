
	var gulp = require('gulp');

var runSequence = require('run-sequence');
var minifyCss = require('gulp-minify-css');
var minifyHTML = require('gulp-minify-html');

var distPath = './dist';


var minify = require('gulp-minify');

// Minify the compiled CSS
gulp.task('minifyCSS', function() {
     return gulp.src('css/*.css')
    .pipe(minifyCss())
    .pipe(gulp.dest(distPath));
});

gulp.task('minify-html', function() {
  return gulp.src('src/*.html')
    .pipe(minifyHTML({ empty: true }))
    .pipe(gulp.dest('./'));
});

// Build all files without starting a server
gulp.task('build', function (done) {
    runSequence([
        'minifyCSS',
        'minify-html'
    ], done);
});


// Dev task: build the Chico and start a server
gulp.task('dev', [
    'build'
]);

// Default task: run the dev
gulp.task('default', ['dev']);