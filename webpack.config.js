const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.join(__dirname, 'dist'),
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'src/index.html'
  })],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 9000
  }
};