var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    clean = require('gulp-clean'),
    jade = require('gulp-jade');

gulp.task('default', function() {
    var LOCALS = {};

    gulp.src('dist', {read: false})
        .pipe(clean());

    gulp.src('src/**/*.jade')
        .pipe(jade({ locals: LOCALS }))
        .pipe(gulp.dest('dist'))

    gulp.src('src/**/*.js')
        .pipe(gulp.dest('dist'))

    gulp.src('src/CNAME')
        .pipe(gulp.dest('dist'))

    // gulp.src('src/**/*')
    //     .pipe(gulp.dest('dist'));
});

gulp.task('browser-sync', function () {
    var files = [
            '*.html',
            'app/assets/css/**/*.css',
            'app/assets/imgs/**/*.png',
            'app/assets/js/**/*.js'
    ];

    browserSync.init(files, {
            server: {
                 baseDir: '.'
            }
    });
});


var deploy = require("gulp-gh-pages-ci-compatible");
var options = {
    message: 'Update ' + new Date().toISOString() + ' [skip ci]',
    branch: "master"
};
gulp.task('deploy', function () {
    gulp.src("dist/**/*")
        .pipe(deploy(options));
});