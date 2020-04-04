import webpack from 'webpack';
import path from 'path';
let ExtractTextPlugin = require("extract-text-webpack-plugin");

let AUTOPREFIXER_LOADER = 'autoprefixer-loader?{browsers:[' +
  '"Android >= 4", "Chrome >= 20", "Firefox >= 24", ' +
  '"Explorer >= 9", "iOS >= 6", "Safari >= 6"]}';

export default {
  debug: true,
  devtool: 'cheap-module-eval-source-map',
  noInfo: false,
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
    './src/index'
  ],
  target: 'web',
  output: {
    path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'//loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
  },
  devServer: {
    contentBase: './src'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
           $: "jquery",
           jQuery: "jquery"
       }),
    new ExtractTextPlugin("[name].css")
  ],
  module: {
    loaders: [
      {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
      {test: /(\.css)$/, loaders: ['style', 'css']},
      {test: /\.less$/,loader: 'style-loader!css-loader!less-loader'},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file"},
      {test: /\.(woff|woff2)$/, loader: "url?prefix=font/&limit=5000"},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream"},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml"},
      { test: /\.jpg$/, loader: 'file' },
      { test: /\.png$/, loader: 'file' },
      { test: /\.ico$/, loader: 'file' },
      { test: /\.gif$/, loader: 'file' },
      { test   : /\.(ttf|eot|woff(2)?)(\?[a-z0-9=&.]+)?$/,loader : 'file'}
    ]
  }
};
