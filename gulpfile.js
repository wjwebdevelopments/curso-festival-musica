const { series, src, dest } = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

// Funcion que compila SASS
function css() {
    return src("./src/scss/app.scss")
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle:'compressed'}).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(dest("./build/css"));
}

exports.css = css;