var gulp = require('gulp');
var liveServer = require('gulp-live-server');
var browserify = require('browserify');
var browserSync = require('browser-sync');
var babel = require('babelify');
var buffer = require('vinyl-buffer');
var sourceStream = require('vinyl-source-stream');
var sourceMaps = require('gulp-sourcemaps');

//Starts up the server and then opens a browser for us
gulp.task('serve',['browserSync']);

gulp.task('browserSync',['server'],function(){
    browserSync.init(null,{
        proxy: "http://localhost:8080",
        port: 9001
    })
});

gulp.task('server',['copy'],function(){
    var server = new liveServer('server.js');
    server.start();
});

gulp.task('bundle',function(){
    var bundler = browserify('./app/main.jsx',{debug: true}).transform(babel,{presets: ["react"]});

    return bundler.bundle()
        .on('error',function(err){console.error(err);})
        .pipe(sourceStream('bundle.js'))
        .pipe(buffer())
        .pipe(sourceMaps.init({loadMaps: true}))
        .pipe(sourceMaps.write('./'))
        .pipe(gulp.dest('./build/js'));
});

gulp.task('copy',['copyCSS'],function(complete){
    console.log('copying Index');
    gulp.src('./app/index.html')
        .pipe(gulp.dest('./build'));

    complete();
});

gulp.task('copyCSS',['bundle'],function(complete){
    console.log('copying CSS');
    gulp.src('./app/styles/*.css')
        .pipe(gulp.dest('./build/styles'));

    complete();
});

