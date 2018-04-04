var gulp = require('gulp');
var Server = require('karma').Server;
var webpack = require('gulp-webpack');
var sequence = require('gulp-sequence');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');
var sass = require('gulp-ruby-sass');
var eslint = require('gulp-eslint');
var insert = require('gulp-insert');
var rename = require("gulp-rename");
var htmlhint = require("gulp-htmlhint");
var autoprefixer = require('gulp-autoprefixer');
var postcss = require('gulp-postcss');

gulp.task('test', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});

/*gulp.task( 'webpack', function (){
	//webpack( require( './webpack.config.js' ) );
	return gulp.src( [ './src/helloworld.js', './src/waitUntil.js' ] )
    .pipe( webpack( require( './webpack.config.js' ) ) )
    .pipe(babel({
            presets: ['es2015']
        }))
	.pipe( uglify() )
    .pipe( gulp.dest( 'bin/' ) );
} );*/
 
gulp.task('html', function (done) {
	gulp.src("src/**/*.html")
	.pipe(htmlhint())
	.pipe( gulp.dest( 'bin/' ) );
});

gulp.task('lint', () => {
    return gulp.src(['src/*.js','!node_modules/**'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

/*gulp.task('removedebug', () => {
	return gulp.src(['src/*.js','!node_modules/**'])
		.pipe(stripDebug());
} )*/

gulp.task( 'webpack', function (){
	//webpack( require( './webpack.config.js' ) );
	return gulp.src( ['src/js/**/*.js','!node_modules/**'] )
	.pipe( eslint() )
    .pipe( webpack( require( './webpack.config.js' ) ) )
	.pipe(rename(function (path) {
		path.extname = ".js"
	}))
    .pipe( gulp.dest( 'bin/js/' ) );
} );
 
gulp.task('sass', () =>
    sass('sass/*.scss', {
			precision: 6,
			stopOnError: true,
			emitCompileError: true
		})
        .on('error', sass.logError)
		.pipe(autoprefixer())
		.pipe(rename(function (path) {
			path.extname = ".css"
		}))
        .pipe(gulp.dest('bin/css/'))
);

gulp.task( 'default', sequence( 'lint', 'test', 'webpack', 'sass', 'html' ) ) ;

gulp.task( 'dev', sequence( 'webpack', 'sass', 'html' ) ) ;