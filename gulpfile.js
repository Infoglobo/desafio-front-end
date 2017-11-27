var gulp = require('gulp');

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifycss = require('gulp-minify-css');
var watch = require('gulp-watch');



gulp.task('css', function() {
    return gulp.src(
        [
            'htdocs/assets/css/reset.css',
            'htdocs/assets/css/style.css',
            'htdocs/assets/css/style.mobile.css',
        ])
        .pipe(concat('style.min.css'))
        .pipe(minifycss())
        .pipe(gulp.dest('htdocs/assets/css'));    
})

gulp.task('watch', function() {
    gulp.watch('htdocs/assets/css/*.css', ['css']);
});
