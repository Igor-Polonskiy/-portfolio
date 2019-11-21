const { series, parallel, src, pipe, dest} = require('gulp');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
function clean(cb) {
  // body omitted
  cb();
}

function cssTranspile(cb) {
  // body omitted
  cb();
}

function cssMinify(cb) {
  // body omitted
  src('./css/vendors/*.css')
    .pipe(cleanCSS('*.css'))
    .pipe(dest('./css/min.css/'));
  cb();
}
function cssBundle(cb) {
  // body omitted
    src('./css/min.css/*.css')
    .pipe(concat('vendors.css'))
    .pipe(dest('./dist/'));
  cb();
}
function jsTranspile(cb) {
  // body omitted
  cb();
}

function jsBundle(cb) {
  // body omitted
  src('./js/*.js')
    .pipe(concat('all.js'))
    .pipe(dest('./dist/'));
  cb();
}

function jsMinify(cb) {
  // body omitted
  cb();
}

function publish(cb) {
  // body omitted
  cb();
}


exports.default = series(
  clean,
  parallel(
    cssBundle,
    series(jsTranspile, jsBundle)
  ),
  parallel(cssMinify, jsMinify),
  publish
);