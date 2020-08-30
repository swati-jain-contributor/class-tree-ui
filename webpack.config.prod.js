import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
console.log("hey");
const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production')
};

export default {
  mode: "production",
  devtool: 'source-map',
  entry: './src/index',
  target: 'web',
  output: {
    path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist'
  },
  optimization: {
    minimize: true,//Update this to true or false
    minimizer: [new UglifyJsPlugin(
      { sourceMap: true }
    ),
    new OptimizeCssAssetsPlugin({})],
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.LoaderOptionsPlugin({ debug: true }),
    new webpack.DefinePlugin(GLOBALS),
    new ExtractTextPlugin('styles.css'),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    // new webpack.optimize.DedupePlugin(),
    // new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    rules: [
      { test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel-loader'] },
      { test: /(\.css)$/, loaders: ['style-loader', 'css-loader'] },
      { test: /\.less$/, loader: ExtractTextPlugin.extract(['css-loader', 'less-loader']) },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader" },
      { test: /\.(woff|woff2)$/, loader: "url-loader" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader" },
      { test: /\.jpg$/, loader: 'file-loader' },
      { test: /\.png$/, loader: 'file-loader' },
      { test: /\.ico$/, loader: 'file-loader' },
      { test: /\.gif$/, loader: 'file-loader' },
      { test: /\.(ttf|eot|woff(2)?)(\?[a-z0-9=&.]+)?$/, loader: 'file-loader' }
    ]
  }
};
//{test: /(\.css)$/, loaders: ['style', 'css']},


