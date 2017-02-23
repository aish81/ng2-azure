"use strict";

const gulp = require("gulp");
const del = require("del");
const tsc = require("gulp-typescript");
const sourcemaps = require('gulp-sourcemaps');
const tsProject = tsc.createProject("tsconfig.json");
const tslint = require('gulp-tslint');

/**
 * Remove build directory.
 */
gulp.task('clean', (cb) => {
    return del(["build"], cb);
});



/**
 * Copy all resources that are not TypeScript files into build directory.
 */
gulp.task("resources", () => {
    return gulp.src(["app/**/*", "!**/*.ts", "!app/server/**"])
        .pipe(gulp.dest("build"));
});

gulp.task("server", function () {
    return gulp.src(["app/server/index.js", "app/server/package.json"])
        .pipe(gulp.dest("build"));
});

/**
 * Copy all required libraries into build directory.
 */
gulp.task("libs", () => {
    return gulp.src([
            'core-js/client/shim.min.js',
            'systemjs/dist/system-polyfills.js',
            'systemjs/dist/system.src.js',
            'reflect-metadata/Reflect.js',
            'rxjs/**/*.js',
            'zone.js/dist/**',
            '@angular/**/bundles/**'
        ], {cwd: "node_modules/**"}) /* Glob required here. */
        .pipe(gulp.dest("build/node_modules"));
});



/**
 * Build the project.
 */
gulp.task("build", ['compile', 'resources', 'libs', 'server'], () => {
    console.log("Building the project ...");
});

gulp.task("project", ['lint', 'compile', 'libs', 'resources', 'server'], () => {
    console.log("Building the project ...");
});