var gulp 		= require('gulp'),
	sass 	 	= require('gulp-sass'),
	browsersync = require("browser-sync"),
	concat 		= require("gulp-concat"),
	uglify 		= require("gulp-uglifyjs"),
	cssnano		= require("gulp-cssnano"),
	rename		= require("gulp-rename"),
	del			= require("del"),
	imagemin	= require("gulp-imagemin"),
	pngquant	= require("imagemin-pngquant"),
	cache 		= require("gulp-cache"),
	autoprefixer = require("gulp-autoprefixer"),
	concatCss 	= require('gulp-concat-css');

gulp.task("sass", function(){
	return gulp.src("app/sass/**/*.sass")
	.pipe(sass())
	.pipe(autoprefixer({cascade:true}))
	.pipe(gulp.dest("app/css"));
});

gulp.task('script-Libs', function(){
	return gulp.src(['app/libs/**/*.js'])
	.pipe(concat('libs.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist/libs'));
});

// gulp.task('concss', function () {
//  return gulp.src('app/css/**/*.css')
//    .pipe(concatCss("styles.css"))
//    .pipe(gulp.dest('dist/css'));
// });

gulp.task("css-libs", ['sass'], function() {
	return gulp.src("app/libs/**/*.css")
	.pipe(concatCss("libs.css"))
	.pipe(cssnano("libs.css"))
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest("dist/libs"));
});

gulp.task("browsersync", function(){
	browsersync({
		server: {
			baseDir: "app"
		},
		notify: false
	});
});

gulp.task('clean', function() {
	return del.sync('dist');
})

gulp.task('clear', function() {
	return cache.clearAll();
})

gulp.task("img", function() {
	return gulp.src('app/img/**/*')
	.pipe(cache(imagemin({
		interlacet: true,
		progressive: true,
		svgoplugins:[{removeVievBox: false}],
		use: [pngquant()]
		})))
	.pipe(gulp.dest('dist/img'))
});

// gulp.task("watch", ['browsersync','css-libs', 'script-Libs'], function(){
gulp.task("watch", ['browsersync'], function(){
	gulp.watch("app/sass/**/*.sass",["sass"], browsersync.reload);
	gulp.watch("app/css/**/*.css", browsersync.reload);
	gulp.watch("app/*.html", browsersync.reload);
	gulp.watch("app/js/*.js", browsersync.reload);
});

gulp.task('build', ['clean','img','sass','script-Libs', "css-libs"], function() {
	
	var buildCss = gulp.src([
		'app/css/*.css'])
		.pipe(concatCss("styles.css"))
        .pipe(cssnano("styles.css"))
        .pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('dist/css'));

	var buildFonts = gulp.src('app/fonts/**/*')
	.pipe(gulp.dest('dist/fonts'));

	var buildJs = gulp.src('app/js/**/*')
	.pipe(gulp.dest('dist/js'));

	var buildHtml = gulp.src('app/*.html')
	.pipe(gulp.dest('dist'));

	var buildIco = gulp.src('app/*.png')
	.pipe(gulp.dest('dist'));

    var buildPDF = gulp.src('app/*.pdf')
		.pipe(gulp.dest('dist'));
});