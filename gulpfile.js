var gulp = require('gulp'),
    less = require('gulp-less');

// all JS files for the application (not vendor files)
var appjs = [
			'app/*.js',
			'app/sections/**/*.js'
		];

// all CSS files for the application
var cssfiles = [
			'app/vendor/fontawesome/css/font-awesome.css',
			'app/vendor/bootstrap/dist/css/bootstrap.css',
			'app/css/app.css'
		];


// font awesome and bootstrap glyphicons
var fontfiles = [
			'app/vendor/fontawesome/fonts/*',
			'app/vendor/bootstrap/fonts/*'
		];


// run less to build app.css
gulp.task('less', function(){
	return gulp.src('app/css/less/app.less')
		.pipe(less().on('error', function(err)
		{
			// print a more descriptive error
			util.log(err);
			notifier.notify({
				'title': 'LESS',
				'message': 'Error(s) found.\nCheck console output.'
			});
		}))
		.pipe(gulp.dest('app/css/'));
});

// watch less css file changes
gulp.task('watchless', function() {
	var watch = require('gulp-watch');
	var watcher = gulp.watch('app/css/less/*.less', ['less']);
	watcher.on('change', function(event) {
		console.log('Running LESS.');
		console.log('Event type: '+event.type); // added, changed, or deleted
		console.log('Event path: '+event.path); // The path of the modified file
	});
});
