let mix = require('laravel-mix');

mix.js('src/main.js', 'dist')
.sass('src/style.scss', 'dist')
.setPublicPath('assets');