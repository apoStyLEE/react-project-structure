var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var babel = require('babelify');
var glob = require('glob');
var uglify = require('gulp-uglify');
var environments = require('gulp-environments');
var development = environments.development;
var production = environments.production;

var definations = {
    jsSourceCodePath : "./source/js/**/*.jsx",
    compiledJsFileName : "app.js",
    destinationJsFolder : "./dist/js",
}

function build() {
  var sourceFiles = glob.sync(definations.jsSourceCodePath);
  var bundler = browserify({entries:sourceFiles, debug: development() }).transform(babel);
  
  bundler.bundle()
      .on('error', function(err) { console.error(err); this.emit('end'); })      
      .pipe(source(definations.compiledJsFileName))
      .pipe(buffer())
      .pipe(production(uglify()))
      .pipe(production(sourcemaps.init({ loadMaps: true })))
      .pipe(production(sourcemaps.write('./')))      
      .pipe(gulp.dest(definations.destinationJsFolder));  
}

gulp.task('build', function() { return build(); });

gulp.task("default", ["build"], function () {
    return gulp.watch(definations.jsSourceCodePath, ["build"]);    
});