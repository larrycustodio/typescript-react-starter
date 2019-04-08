const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  output: {
    filename: 'bundle.min.js',
    path: path.join(__dirname, '/dist'),
  },
  devtool: 'source-map', // add sourcemap support
  module: {
    rules: [
      // add sourcemap support
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};
