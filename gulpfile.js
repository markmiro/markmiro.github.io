var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    clean = require('gulp-clean');

gulp.task('default', function() {
    gulp.src('dist', {read: false})
        .pipe(clean());
    gulp.src('src/**/*')
        .pipe(gulp.dest('dist'));
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