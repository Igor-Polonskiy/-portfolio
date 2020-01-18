const { series, parallel, src, pipe, dest} = require('gulp');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const remove = require('gulp-clean')
const postcss = require('gulp-postcss');

function clean(cb) {
  return src('dist/**', {read: false})
        .pipe(remove());
}
function cleanTemp(cb) {
  return src('./css/vendors/min', {read: false})
        .pipe(remove());
}

function cssTranspile(cb) {
   return src('./css/*.css')
        .pipe(postcss())
        .pipe(dest('./dest'));
}
function cssVendorsMinify(cb) {
  // body omitted
 return src('./css/vendors/*.css')
    .pipe(cleanCSS('*.css'))
    .pipe(dest('./css/vendors/min/'));
}
function cssVendorsBundle(cb) {
  // body omitted
  return src('./css/vendors/min/*.css')
    .pipe(concat('vendors.min.css'))
    .pipe(dest('./dist/')); 
}
function jsTranspile(cb) {
  // body omitted
  cb();
}

function jsBundle(cb) {
  // body omitted
  return src('./js/*.js')
    .pipe(concat('all.js'))
    .pipe(dest('./dist/')); 
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
  jsTranspile,
  jsBundle,
  cssTranspile,
  cssVendorsMinify,
  cssVendorsBundle,
  // parallel(cssMinify, jsMinify),
  cleanTemp,
  publish
);