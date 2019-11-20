const gulp = require('gulp');
const uglify = require('gulp-uglify-es').default;
const concat = require('gulp-concat');
const minifyCSS = require('gulp-minify-css');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');

const src = './';
const build = './build';

gulp.task('js', function (done) {
    gulp.src(src + 'js/*.js').pipe(concat('all.js')).pipe(uglify()).pipe(gulp.dest(build + '/js'));
    browserSync.reload();
    done();
});

gulp.task('css', function(done) {
    gulp.src(src + 'css/*.css').pipe(minifyCSS()).pipe(gulp.dest(build + '/css')).pipe(browserSync.stream());
    done();
});

gulp.task('scss', function(done){
    gulp.src(src + 'scss/*.scss').pipe(sass()).pipe(minifyCSS()).pipe(gulp.dest(build + '/css')).pipe(browserSync.stream());
    done();
});

gulp.task('html', function(done){
    gulp.src(src + '*.html').pipe(gulp.dest(build));
    browserSync.reload();
    done();
});

gulp.task('images', function(done) {
    gulp.src(src + 'images/*').pipe(imagemin()).pipe(gulp.dest(build + "/img"));
    browserSync.reload();
    done();
});

gulp.task('files', function (done) {
    gulp.src(src + 'files/*').pipe(gulp.dest(build + '/files'));
    done();
});

gulp.task('clean', function (done) {

});

gulp.task('build', gulp.series('html', 'css', 'scss', 'js', 'images', 'files'));

gulp.task('run', function(done){
    browserSync.init({
        server: {
            baseDir: build
        }
    });

    gulp.watch(src + "*.html", gulp.series('html'));
    gulp.watch(src + 'css/*.css', gulp.series('css'));
    gulp.watch(src + 'scss/*.scss', gulp.series('scss'));
    gulp.watch(src + 'js/*.js', gulp.series('js'));
    gulp.watch(src + 'images/*', gulp.series('images'));
    gulp.watch(src + 'files/*', gulp.series('files'));
});

gulp.task('default', gulp.series('build', 'run'));