const { series, src, dest, watch } = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const notify = require('gulp-notify');
const webp = require('gulp-webp');
const paths = require('./paths');


function css() {
    return src(paths.scss)
        .pipe(sass({ outputStyle: 'expanded' }))
        .pipe(dest("./build/css"));
}

function minificarCss() {
    return src(paths.scss)
        .pipe(sass({outputStyle:'compressed'}))
        .pipe(dest("./build/css"));
}

function minificarImagenes() {
    return src(paths.imagenes)
        .pipe(imagemin())
        .pipe(dest("./build/img"))
        // .pipe(notify({ message: 'Imagen minificada' }));
}

function watchArchivo() {
    // @args Archivo que se va a observar, tarea a ejecutar
    watch(paths.scss, css); // *.scss = carpeta actual, **/*.scss = Todos los archivos dentro de la carpeta SCSS
}

function versionWebp() {
    return src(paths.imagenes)
        .pipe(webp())
        .pipe(dest('./build/img'))
}


exports.css = css;
exports.minificarImagenes = minificarImagenes;
exports.minificarCss = minificarCss;
exports.watchArchivo = watchArchivo;
exports.default = series(css, minificarImagenes, versionWebp, watchArchivo);
