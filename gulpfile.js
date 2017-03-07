'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var refresh = require('gulp-refresh');


gulp.task('scss', () => {
	gulp.src('./sass/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./css'))
		.pipe(refresh.reload())
});


gulp.task('html', function() {
	gulp.src('./**/.html')
		.pipe(htmlInject())      // inject <script>
		.pipe(gulp.dest("./"));
});

gulp.task('sass', function () {
	return gulp.src('./sass/**/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('./css'));
});


gulp.task('sass:watch', function () {
	// refresh.listen({port:8188, host:'127.0.0.1', basePath: './', reloadPage: "index.html", start:true});
	gulp.watch('./sass/**/*.scss', ['sass']);
});
