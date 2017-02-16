var gulp = require('gulp');
var mocha = require('gulp-mocha');
var eslint = require('gulp-eslint');

require("babel-register");

function runTests() {
    return gulp.src(['./tests/**/*.js'], {
        base: 'tests'
    }).pipe(mocha());
}

function runEsLint() {
    return gulp.src(['./server/**/*.js', './client/**/*.js', './tests/**/*.js'])
        .pipe(eslint({
            configFilePath: './.eslintrc.json',
            useEslintrc: true
        }))
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
}

gulp.task('default', function() {
    runEsLint();
    runTests();
});

gulp.task('test', function() {
    runTests();
});

gulp.task('watch', function() {
    gulp.watch([
        'server/**/*.js',
        'client/**/*.js',
        'tests/**/*.js'
    ], [
        "test"
    ]);
});

gulp.task('eslint', function() {
    return runEsLint();
});