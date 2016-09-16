var gulp = require("gulp"),
    uglify = require("gulp-uglify"),
    sass = require("gulp-sass"),
    plumber = require("gulp-plumber"),
    imagemin = require("gulp-imagemin");

gulp.task("scripts", function() {
    gulp.src("js/*.js")
        .pipe(plumber())
        .pipe(uglify())
        .pipe(gulp.dest("dist/js"));  
});

gulp.task("image", function() {
    gulp.src("images/*")
        .pipe(imagemin())
        .pipe(gulp.dest("dist/images"));  
});

gulp.task("styles", function() {
    gulp.src("css/**/*.scss")
        .pipe(plumber())
        .pipe(sass({outputStyle: 'compressed'})
            .on('error', sass.logError))
        .pipe(gulp.dest("dist/css"));
});

gulp.task("watch", function(){
    gulp.watch("js/*.js", ["scripts"]);
    gulp.watch("css/*.scss", ["styles"]);
});

gulp.task("default", ["scripts", "styles", "image"]);