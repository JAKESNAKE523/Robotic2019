const gulp = require('gulp');
const deploy = require('gulp-gh-pages');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const minifyCSS = require('gulp-minify-css');
const browserSync = require('browser-sync').create();

const src = './';
const build = './build';

gulp.task('js', function (done) {
    gulp.src(src + 'js/*.js').pipe(concat('all.js')).pipe(uglify()).pipe(gulp.dest(build + '/js'));
    done();
});

gulp.task('css', function(done) {
    gulp.src(src + 'css/*.css').pipe(minifyCSS()).pipe(gulp.dest(build + '/css'));
    done();
});

gulp.task('deploy', function (done) {
    gulp.src("./build/**/*").pipe(deploy());
    done();
});

gulp.task('html', function(done){
    gulp.src(src + '*.html').pipe(gulp.dest(build));
    done();
});

gulp.task('build', gulp.series('html', 'css', 'js'));

gulp.task('run', function(done){
    browserSync.init({
        server: {
            baseDir: build
        }
    });

    gulp.watch(src + "*.html", gulp.series('html'));
    gulp.watch(src + 'css/*.css', gulp.series('css'));
    gulp.watch(src + 'js/*.js', gulp.series('js'));
});

gulp.task('default', gulp.series('run'));