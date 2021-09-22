const mix = require('laravel-mix');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

const sassFileList = [
    'build/scss/common',
    'build/scss/vendor',
    'pages/index',
    'pages/store/store-listing',
    'pages/store/store-category',
    'pages/store/store-card',
    'pages/store/cart',
    'pages/portfolio/portfolio-listing',
    'pages/portfolio/portfolio-card',
    'pages/about/about',
    'pages/message/success',
    'pages/brief/brief'
];

const jsFileList = [
    'build/js/common',
    'pages/index',
    'pages/store/store-listing',
    'pages/store/store-category',
    'pages/store/store-card',
    'pages/store/cart',
    'pages/portfolio/portfolio-listing',
    'pages/portfolio/portfolio-card',
    'pages/about/about',
    'pages/brief/brief'
];

mix.options({
  clearConsole: true,
});

mix.setPublicPath('assets/')

jsFileList.forEach(fileName => mix.js(`./${fileName}.js`, 'js'));

sassFileList.forEach(
    fileName => mix.sass(`./${fileName}.scss`, 'css')
        .options({processCssUrls: false})
);


mix.sourceMaps(true, 'source-map');

mix.version()
