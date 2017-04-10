var gulp = require('gulp'),
	postcss = require('gulp-postcss'),
	sass = require('gulp-sass'),
	sourcemaps = require('gulp-sourcemaps'),
	autoprefixer = require('autoprefixer'),
	lost = require('lost'),
	concat = require('gulp-concat');
	htmlmin = require('gulp-htmlmin');

var paths = {
	source: 'source/assets/scss/regions/',
	destination: 'source/assets/scss/'
};

gulp.task('styles', function() {
		var processors = [autoprefixer,lost,sass];
		return gulp.src(paths.source + '**/*.scss  ')
				.pipe(sourcemaps.init())
				.pipe(postcss(processors))
				.pipe(concat('layout-grid.scss'))
				//.pipe(sourcemaps.write('./'))
				.pipe(gulp.dest(paths.destination));
});

gulp.watch(paths.source + '**/*.scss', ['styles']);

gulp.task('minify', function() {
	return gulp.src('build/*.html')
		.pipe(htmlmin({collapseWhitespace: true,removeComments:true,useShortDoctype:true}))
		.pipe(gulp.dest('build'));
});

gulp.task('default', ['styles', 'minify']);
