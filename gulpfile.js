const gulp = require('gulp');
const uglify = require('gulp-uglify-es').default;
const concat = require('gulp-concat');
const minifyCSS = require('gulp-minify-css');
const browserSync = require('browser-sync').create();

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

gulp.task('html', function(done){
    gulp.src(src + '*.html').pipe(gulp.dest(build));
    browserSync.reload();
    done();
});

gulp.task('images', function(done) {
    gulp.src(src + 'images/*').pipe(gulp.dest(build + "/img"));
    browserSync.reload();
    done();
})

gulp.task('build', gulp.series('html', 'css', 'js', 'images'));

gulp.task('run', function(done){
    browserSync.init({
        server: {
            baseDir: build
        }
    });

    gulp.watch(src + "*.html", gulp.series('html'));
    gulp.watch(src + 'css/*.css', gulp.series('css'));
    gulp.watch(src + 'js/*.js', gulp.series('js'));
    gulp.watch(src + 'images/*', gulp.series('images'));
});

gulp.task('default', gulp.series('build', 'run'));