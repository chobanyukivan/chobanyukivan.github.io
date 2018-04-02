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
	// .pipe(autoprefixer(['last 15 versions','>1%', 'ie 8'], {cascade:true}))
	.pipe(gulp.dest("app/css"));
});

gulp.task('scripts', function(){
	return gulp.src(['app/libs/**/*.js'])
	.pipe(concat('libs.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist/js'));
});


gulp.task('concss', function () {
 return gulp.src('app/css/**/*.css')
   .pipe(concatCss("style.css"))
   .pipe(gulp.dest('dist/css'));
});


gulp.task("css-libs", ['sass'], function() {
	return gulp.src("app/**/*.css")
	// 
	.pipe(concatCss("style.css"))
	// 
	.pipe(cssnano("style.css"))
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest("dist/css"));
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

gulp.task("watch", ['browsersync','css-libs', 'scripts'], function(){
	gulp.watch("app/sass/**/*.sass",["sass"], browsersync.reload);
	gulp.watch("app/css/**/*.css", browsersync.reload);
	gulp.watch("app/*.html", browsersync.reload);
	gulp.watch("app/js/**/*.js", browsersync.reload);
});

gulp.task('build', ['clean','img','sass','scripts', "css-libs"], function() {
	
	// var buildCss = gulp.src([
	// 	'app/css/*.css'])
	// .pipe(gulp.dest('dist/css'));

	var buildFonts = gulp.src('app/fonts/**/*')
	.pipe(gulp.dest('dist/fonts'));

	var buildJs = gulp.src('app/js/**/*')
	.pipe(gulp.dest('dist/js'));

	var buildHtml = gulp.src('app/*.html')
	.pipe(gulp.dest('dist'));

	var buildIco = gulp.src('app/*.png')
	.pipe(gulp.dest('dist'));
});