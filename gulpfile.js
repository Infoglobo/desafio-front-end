var gulp = require('gulp');

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifycss = require('gulp-minify-css');
var watch = require('gulp-watch');
var pump = require('pump');



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
gulp.task('minifyjs', function(cb){
    pump([
        gulp.src(['htdocs/assets/script/script.js']),
            concat('script.min.js'),
            uglify(),
            gulp.dest('htdocs/assets/script/')
    ],cb)
    
});

gulp.task('watch', function() {
    gulp.watch('htdocs/assets/css/*.css', ['css', 'minifyjs']);
});
