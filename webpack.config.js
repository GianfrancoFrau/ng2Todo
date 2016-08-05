var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  entry: {
    "app":      './src/main.ts',
    "vendor":  './src/lib/vendor/vendor.ts'
  },

  output: {
    path: './dist',
    filename: '[name]/bundle.[chunkhash].js'
  },

  module: {
    loaders: [
      {test: /\.ts$/, loader: 'ts'},
      {test: /\.html$/, loader: 'raw'},
      {test: /\.css$/, loader: 'raw'}
    ]
  },

  resolve: {
    extensions: ['', '.js', '.ts', '.html', '.css']
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin("vendor", "lib/angular.[chunkhash].js"),
    new HtmlWebpackPlugin({
      chunks: ['app', 'vendor'],
      template: './src/index.html',
      filename: './index.html'
    }),
  ]
};
