let mix = require('laravel-mix');

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

mix
  .setPublicPath('./')
  .webpackConfig({
    module: {
      rules: [
        {
          test: /\.(jsx|js|vue)$/,
          loader: 'eslint-loader',
          enforce: 'pre',
          exclude: /(node_modules|bower_components)/,
          options: {
            formatter: require('eslint-friendly-formatter')
          }
        }
      ]
    },
    resolve: {
      modules: ['node_modules', path.join(__dirname, 'src', 'js')],
      alias: {
        config: path.join(__dirname, 'config'),
      },
    },
    /*
    */
  })
  .copy('src/static', './public')
  .react('src/js/index.js', 'public/js/app.js')
  .react('src/admin/index.js', 'public/js/admin.js')
  .js('src/pwa/service-worker.js', 'public/service-worker.js');
  // .sass('src/scss/main.scss', 'css');
