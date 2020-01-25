const gulp = require('gulp');
const ejs = require('gulp-ejs');
const fs = require("fs");
const rename = require('gulp-rename');

gulp.task('ejs', function() {
    gulp.src(['./_resources/images/*'])
        .pipe(gulp.dest('./docs/images/'));
    gulp.src(['./_resources/js/*'])
        .pipe(gulp.dest('./docs/dist/js/'));
    return gulp.src(['./_page/**/*.ejs'])
        .pipe(ejs({}))
        .pipe(rename({extname: '.html'}))
        .pipe(gulp.dest('./docs/'));
});
