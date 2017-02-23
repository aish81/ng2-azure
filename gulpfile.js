"use strict";
var gulp = require("gulp");
var del = require("del");
var tsc = require("gulp-typescript");
var sourcemaps = require('gulp-sourcemaps');
var tsProject = tsc.createProject("tsconfig.json");
var tslint = require('gulp-tslint');
var replace = require('gulp-string-replace');
/**
 * Remove build directory.
 */
gulp.task('clean', function (cb) {
    return del(["build"], cb);
});
/**
 * Lint all custom TypeScript files.
 */
gulp.task('tslint', function () {
    return gulp.src("app/**/*.ts")
        .pipe(tslint({
        formatter: 'prose'
    }))
        .pipe(tslint.report());
});
/**
 * Compile TypeScript sources and create sourcemaps in build directory.
 */
gulp.task("compile", ["tslint"], function () {
    var tsResult = gulp.src("app/**/*.ts")
        .pipe(sourcemaps.init())
        .pipe(tsProject());
    return tsResult.js
        .pipe(sourcemaps.write(".", { sourceRoot: '/app' }))
        .pipe(gulp.dest("build"));
});
/**
 * Copy all resources that are not TypeScript files into build directory.
 */
gulp.task("resources", function () {
    return gulp.src(["app/**/*", "!**/*.ts", "!app/server/**"])
        .pipe(gulp.dest("build/app"));
});
gulp.task("server", function () {
    return gulp.src(["server/index.js", "server/package.json","systemjs.config.js"])
        .pipe(gulp.dest("build"));
});
/**
 * Copy all required libraries into build directory.
 */
gulp.task("libs", function () {
    return gulp.src([
        'core-js/client/shim.min.js',
        'systemjs/dist/system-polyfills.js',
        'systemjs/dist/system.src.js',
        'reflect-metadata/Reflect.js',
        'rxjs/**/*.js',
        'zone.js/dist/**',
        '@angular/**/bundles/**',
        'bootstrap/dist/**'
    ], { cwd: "node_modules/**" }) /* Glob required here. */
        .pipe(gulp.dest("build/lib"));
});

gulp.task('replace', function() {
    gulp.src(["index.html","systemjs.config.js"])
        .pipe(replace('node_modules', 'lib'))
        .pipe(gulp.dest('./build'))
});

gulp.task('replace2', function() {

});

/**
 * Build the project.
 */
gulp.task("build", ['compile', 'resources', 'libs', 'server'], function () {
    console.log("Building the project ...");
});
gulp.task("project", [ 'libs','resources', 'server', 'replace'], function () {
    console.log("Building the project ...");
    gulp.src(["systemjs.config.js"])
        .pipe(replace('node_modules', 'lib'))
        .pipe(gulp.dest('./build'))
});
//# sourceMappingURL=gulpfile.js.map