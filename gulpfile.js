const gulp = require('gulp');
const javac = require('gulp-javac');
const exec = require('child_process').exec;

gulp.task('default', ['build']);

gulp.task('build', function() {
	return gulp.src('./src/**/*.java')
		.pipe(javac.javac())
		.pipe(gulp.dest('./build/'));
});

gulp.task('run', function (cb) {
	exec('cd build; java Main', function (err, stdout, stderr) {
		console.log(stdout);
		console.log(stderr);
		cb(err);
	});
});
