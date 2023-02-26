/**
 * The module dependencies.
 */
// Libs
const del = require("del");
const gulp = require("gulp");
const sass = require('gulp-sass')(require('sass'));
const gulpIf = require("gulp-if");
const rename = require("gulp-rename");
const notify = require("gulp-notify");
const plumber = require("gulp-plumber");
const sourcemaps = require("gulp-sourcemaps");
const rev = require("gulp-rev");
const vinyl = require("vinyl-paths");
const changed = require("gulp-changed");
const imagemin = require("gulp-imagemin");
const imageminMozjpeg = require("imagemin-mozjpeg");
const imageminPNGquant = require("imagemin-pngquant");

// Components
const utils = require("./utils");

/**
 * Setup the env.
 */
const { isProd, isDev } = utils.detectEnv();

/**
 * Show notification on error.
 */
const error = function (e) {
	notify.onError({
		title: "Gulp",
		message: e.message,
		sound: "Beep",
	})(e);

	this.emit("end");
};

/**
 * Process sass files through sass and PostCSS.
 */
const mainStyles = () => {
	const src = utils.srcStylesPath("load-main.scss");
	const dest = utils.buildStylesPath();

	return gulp
		.src(src, {
			allowEmpty: true,
		})
		.pipe(gulpIf(isDev, sourcemaps.init()))
		.pipe(sass().on('error', error))
		.pipe(gulpIf(isDev, plumber({ errorHandler: error })))
		.pipe(rename("main.css"))
		.pipe(gulpIf(isDev, sourcemaps.write("./")))
		.pipe(gulp.dest(dest));
};

/**
 * Process sass files through sass and PostCSS used in the administration area.
 */
const adminStyles = () => {
	const src = utils.srcStylesPath("load-admin.scss");
	const dest = utils.buildStylesPath("");

	return gulp
		.src(src, {
			allowEmpty: true,
		})
		.pipe(gulpIf(isDev, sourcemaps.init()))
		.pipe(sass().on('error', error))
		.pipe(gulpIf(isDev, plumber({ errorHandler: error })))
		.pipe(rename("admin.css"))
		.pipe(gulpIf(isDev, sourcemaps.write("./")))
		.pipe(gulp.dest(dest));
};

/**
 * Copy all images used in HTML files.
 */
const images = () => {
	const src = [
		utils.srcImagesPath("**/*"),
		`!${utils.srcImagesPath("sprite*")}`,
		`!${utils.srcImagesPath("sprite/*")}`,
	];
	const dest = utils.buildImagesPath();

	return gulp
		.src(src)
		.pipe(changed(dest))
		.pipe(plumber({ errorHandler: error }))
		.pipe(gulp.dest(dest));
};

/**
 * Optimize all images in the build folder.
 */
const optimize = () => {
	const src = utils.buildImagesPath("**/*");
	const dest = utils.buildImagesPath();

	return gulp
		.src(src)
		.pipe(plumber({ errorHandler: error }))
		.pipe(
			imagemin([
				// GIFs
				// https://github.com/imagemin/imagemin-gifsicle#api
				imagemin.gifsicle({
					interlaced: true,
				}),

				// JP(E)G
				// https://github.com/imagemin/imagemin-jpegtran#api
				imageminMozjpeg({
					quality: 70,
				}),

				// PNG
				// https://github.com/imagemin/imagemin-optipng#api
				imageminPNGquant({
					speed: 1,
					quality: 90,
				}),

				// SVG
				// https://github.com/imagemin/imagemin-svgo#api
				// https://github.com/svg/svgo#what-it-can-do
				imagemin.svgo({
					plugins: [
						{ cleanupAttrs: true },
						{ removeDoctype: true },
						{ removeXMLProcInst: true },
						{ removeComments: true },
						{ removeMetadata: true },
						{ removeUselessDefs: true },
						{ removeEditorsNSData: true },
						{ removeEmptyAttrs: true },
						{ removeHiddenElems: false },
						{ removeEmptyText: true },
						{ removeEmptyContainers: true },
						{ cleanupEnableBackground: true },
						{ removeViewBox: false },
						{ cleanupIDs: false },
						{ convertStyleToAttrs: true },
					],
				}),
			])
		)
		.pipe(gulp.dest(dest));
};

/**
 * Generate a production-ready manifest file.
 */
const manifest = () => {
	const base = utils.buildPath();
	const src = [
		utils.buildStylesPath( 'main.css' ),
		utils.buildStylesPath("admin.css"),
	];

	return gulp
		.src(src, { base })
		.pipe(vinyl((paths) => del(paths, { force: true })))
		.pipe(rev())
		.pipe(gulp.dest(base))
		.pipe(rev.manifest("manifest.json"))
		.pipe(gulp.dest(base));
};

/**
 * Watch for changes and run through different tasks.
 */
const watch = () => {
	gulp.watch(
		[
			utils.srcStylesPath("*.scss"),
			utils.srcStylesPath("**/**/*.scss")
		],
		gulp.series(mainStyles, adminStyles)
	);

	gulp.watch([utils.srcImagesPath("**/*")], images);
};

/**
 * Remove the build.
 */
const clean = () => del([utils.buildPath()], { force: true });

/**
 * Register the tasks.
 */
gulp.task( 'dev', gulp.series( clean, gulp.parallel( mainStyles, adminStyles, images ), gulp.parallel( watch ) ) )

gulp.task( 'build', gulp.series( clean, mainStyles, adminStyles, images, optimize, manifest ) )

gulp.task( 'default', gulp.parallel( 'dev' ) )
