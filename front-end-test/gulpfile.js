var gulp = require('gulp');

gulp.task('default', function() {

	var minifyCss = require('gulp-minify-css');
	 
	gulp.task('minify-css', function() {
	  	return gulp.src('styles/*.css','lib/chico/dist/ui/chico.min.css')
	    .pipe(minifyCss({compatibility: 'ie8'}))
	    .pipe(gulp.dest('dist'));
	});


	var minify = require('gulp-minify');
	 
	gulp.task('compress', function() {
	  gulp.src('lib/tiny.js/dist/tiny.js','lib/chico/dist/ui/chico.min.js')
	    .pipe(minify({
	        exclude: ['tasks'],
	    }))
	    .pipe(gulp.dest('dist'))
	});

	var minifyHTML = require('gulp-minify-html');
	 
	gulp.task('minify-html', function() {
	  return gulp.src('src/*.html')
	    .pipe(minifyHTML({ empty: true }))
	    .pipe(gulp.dest('dist'));
	});

});