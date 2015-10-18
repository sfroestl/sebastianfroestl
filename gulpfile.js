var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var watch = require('gulp-watch');

var paths = {
	'less': './src/less',
	'html': './src/html/**/*.html',
	'assets': './src/assets/**/*',
	'js': './src/js/**/*.js'
}

gulp.task('less', function() {
	gulp
		.src('./src/less/main.less')
		.pipe(less({
			paths: [ paths.less ]
		}))
		.on('error', function (error) {
			console.log(error.message);
			this.emit('end');
		})
		.pipe(gulp.dest('./build/css'))
});

gulp.task('html', function() {
	gulp
		.src(paths.html)
		.pipe(gulp.dest('./build/'))
})

gulp.task('js', function() {
	gulp
		.src(paths.js)
		.pipe(gulp.dest('./build/js'))
})

gulp.task('assets', function() {
	gulp
		.src(paths.assets)
		.pipe(gulp.dest('./build/'))
})

gulp.task('watch', function () {
	gulp.watch('./src/less/**/*.less', ['less']);
	gulp.watch(paths.html, ['html']);
		gulp.watch(paths.js, ['js']);
	gulp.watch(paths.assets, ['assets']);
});


gulp.task('default', [
	'less',
	'html',
	'js',
	'assets',
	'watch'
]);
