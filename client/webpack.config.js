// client/webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'development',  // switch to 'production' for a production build
  entry: path.resolve(__dirname, 'src', 'index.js'),

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true, // wipe /dist before each build
  },

  devtool: 'inline-source-map', // for easier debugging

  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 3000,
    open: true,
    hot: true,
    client: {
      overlay: true,
    },
  },

  module: {
    rules: [
      // We removed the babel-loader rule. If you just write modern browser-compatible JS,
      // you don’t need any loader here.
      //
      // If you decide later to add Babel, install "babel-loader" + "@babel/core" + presets
      // and re-enable that rule.
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      // (No JS loader needed for plain ES6 modules in modern browsers)
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
      filename: 'index.html',
    }),
    new Dotenv(), // Reads .env and makes process.env.API_URL available
  ],
};
