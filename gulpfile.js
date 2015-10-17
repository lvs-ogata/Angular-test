var gulp = require('gulp');
var gulp = require('gulp-sass');

gulp.task('watch', function() {
	gulp.src('/scss/style.scss')
	.pipe(sass())
	.pipe(gulp.dest('/css');
});

gulp.task('default', function() {
	gulp.watch('/scss/style.scss',['watch']);
});
