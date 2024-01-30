const gulp        = require('gulp');
const browserSync = require('browser-sync');

// Static server
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "src"
        }
    });
});


gulp.task('styles', function(){
    return gulp.src("src/scss/*.+(scss|sass"))
})