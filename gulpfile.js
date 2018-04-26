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
	concatCss 	= require('gulp-concat-css'),
    cleancss    = require('gulp-clean-css'),
    notify      = require("gulp-notify"),
    htmlreplace = require('gulp-html-replace');

gulp.task("sass", function(){
	return gulp.src("app/sass/**/*.sass")
	// .pipe(sass())
    .pipe(sass({outputStyle: 'expand'}).on("error", notify.onError()))
    .pipe(autoprefixer({cascade:true}))
	.pipe(gulp.dest("app/css"))
    // .pipe(browsersync.stream());
});

gulp.task("watch", function(){
    browsersync({
        server: "dist",
        notify: false,
        // browser: ["firefox", "chrome" ]
        browser: ["firefox"]
    });

    gulp.watch("app/sass/**/*.sass", ['sass'], browsersync.reload);
    gulp.watch("app/css/**/*.css", browsersync.reload);
    gulp.watch("app/*.html").on('change', browsersync.reload);
	gulp.watch("app/js/*.js", browsersync.reload);
});

gulp.task('script-Libs', function(){
    return gulp.src([
        'app/libs/jquery/jquery-2.1.3.min.js',
        'app/libs/**/*.js',
        'app/js/**/*.js'
    ])
        .pipe(concat('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task("css-libs", function() {
    return gulp.src([
        "app/libs/**/*.css",
        'app/css/*.css'
    ])
        .pipe(cleancss( {level: { 1: { specialComments: 0 } } }))
        .pipe(concatCss("styles.css"))
        .pipe(cssnano("styles.css"))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/css'));
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

gulp.task('build', ['clean','img','sass','script-Libs', "css-libs"], function() {

	var buildFonts = gulp.src('app/fonts/**/*')
	.pipe(gulp.dest('dist/fonts'));

	var buildHtml = gulp.src('app/*.html')
		.pipe(htmlreplace({
            // 'csslibs': 'libs/libs.min.css',
            'csslibs': 'css/styles.min.css',
            'js': 'js/scripts.min.js'
		}))
	    .pipe(gulp.dest('dist'));

	var buildIco = gulp.src('app/*.png')
	    .pipe(gulp.dest('dist'));

    var buildPDF = gulp.src('app/*.pdf')
		.pipe(gulp.dest('dist'));

    var buildPortf = gulp.src('app/portf/**/*')
        .pipe(gulp.dest('dist/portf'));
});