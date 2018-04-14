const webpack = require("webpack");
const nodeExternals = require('webpack-node-externals');
const path = require('path');

const serverConfig = {
  entry: "./node/server.js",
  target: "node",
  externals: [nodeExternals()],
  output: {
    path: __dirname,
    filename: "server.js",
    libraryTarget: "commonjs2"
  },
  resolve: {
    modules: ['node_modules', path.join('src', 'js')],
    alias: {
      config: path.join(__dirname, 'config'),
      '@': path.join(__dirname, 'src', 'js'),
    },
  },
  node: {
    __dirname: false
  },
  devtool: "cheap-module-source-map",
  module: {
    rules: [
      {
        test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: "file-loader",
        options: {
          name: "public/media/[name].[ext]",
          publicPath: url => url.replace(/public/, ""),
          emit: false
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "css-loader/locals"
          }
        ]
      },
      {
        test: /js$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        query: { presets: ["react-app"] }
      }
    ]
  }
};

module.exports = [serverConfig];
