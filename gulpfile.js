const gulp        = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass')(require('sass'));
const rename = require("gulp-rename");
<<<<<<< Updated upstream
=======
const cleanCSS = require('gulp-clean-css');
const autoprefixer 
>>>>>>> Stashed changes

// Static server
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "src"
        }
    });
});


gulp.task('styles', function(){
    return gulp.src("src/scss/*.+(scss|sass)")
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
<<<<<<< Updated upstream
=======
		.pipe(rename({
			prefix: "",
			suffix: ".min",
		}))
		.pipe(autoprefixer({
			cascade: false
		}))
		.pipe(cleanCSS({compatibility: 'ie8'}))
>>>>>>> Stashed changes
		.pipe(gulp.dest("src/css"))
		.pipe(browserSync.stream());
})

gulp.task('watch', function(){
	gulp.watch("src/scss/*.+(scss|sass)", gulp.parallel("styles"));
	gulp.watch("src/*.html").on("change", browserSync.reload);
})

<<<<<<< Updated upstream
gulp.task('default', gulp.parallel('watch', 'server', 'styles'))
=======
gulp.task('default', gulp.parallel('watch', 'server', 'styles'))
>>>>>>> Stashed changes
