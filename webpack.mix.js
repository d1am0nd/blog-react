let mix = require('laravel-mix');
let nodeExternals = require('webpack-node-externals');
let argv = require('yargs').argv;

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

const sharedConfig = {
  module: {
    rules: [
      {
        test: /\.(tsx|jsx|js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        exclude: /(node_modules|bower_components|node)/,
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      }
    ]
  },
  resolve: {
    modules: ['node_modules'],
    alias: {
      config: path.join(__dirname, 'config'),
      admin: path.join(__dirname, 'src', 'admin'),
      '@': path.join(__dirname, 'src', 'js'),
    },
  },
};

mix
  .setPublicPath('./')
  .webpackConfig(sharedConfig);

if (argv.isserver) {
  mix
    .webpackConfig({
      externals: [nodeExternals()],
      node: {
        __dirname: false,
      },
    })
    .ts('node/server.tsx', './server.js');
} else {
  mix
    .copy('src/static', './public')
    .ts('src/ts/index.tsx', 'public/js/app.js');
}
