import webpack from 'webpack';
import path from 'path';
let ExtractTextPlugin = require("extract-text-webpack-plugin");

let AUTOPREFIXER_LOADER = 'autoprefixer-loader?{browsers:[' +
  '"Android >= 4", "Chrome >= 20", "Firefox >= 24", ' +
  '"Explorer >= 9", "iOS >= 6", "Safari >= 6"]}';

export default {
  devtool: 'cheap-module-eval-source-map',
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
    inline: false,
    contentBase: './src'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.LoaderOptionsPlugin({ debug: true }) ,
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.ProvidePlugin({
           $: "jquery",
           jQuery: "jquery"
       }),
    new ExtractTextPlugin("[name].css")
  ],
  module: {
    rules: [
      {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel-loader']},
      {test: /(\.css)$/, loaders: ['style-loader', 'css-loader']},
      {test: /\.less$/,loader: 'style-loader!css-loader!less-loader'},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader"},
      {test: /\.(woff|woff2)$/, loader: "url-loader"},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader"},
      {test: /\.svg*(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader"},
      { test: /\.jpg$/, loader: 'file-loader' },
      { test: /\.png$/, loader: 'file-loader' },
      { test: /\.ico$/, loader: 'file-loader' },
      { test: /\.gif$/, loader: 'file-loader' },
      { test   : /\.(ttf|eot|woff(2)?)(\?[a-z0-9=&.]+)?$/,loader : 'file-loader'}
    ]
  }
};
