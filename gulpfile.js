var gulp = require('gulp');
var jscs = require('gulp-jscs');
var jscov = require('gulp-jscoverage');
var contribs = require('gulp-contribs');

gulp.task('jscs', function() {
  gulp.src([
    'lib/*.js',
    'test/*.js'
  ]).pipe(jscs());
});

gulp.task('jscov', function() {
  gulp.src('lib/*.js')
    .pipe(jscov('index.js'))
    .pipe(gulp.dest('./lib-cov'));
});

gulp.task('contribs', function() {
  gulp.src('README.md')
    .pipe(contribs())
    .pipe(gulp.dest('./'));
});

gulp.task('docs', ['contribs']);
