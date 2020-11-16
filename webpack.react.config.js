const dotenv = require('dotenv');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');

const env = dotenv.config().parsed;

module.exports = {
  entry: './src/app/index.tsx',
  devtool: 'source-map',
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.svg$/,
        use: [{
          loader: '@svgr/webpack',
        }],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    compress: true,
    hot: true,
    port: process.env.PORT,
    publicPath: '/',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    publicPath: './',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new DefinePlugin({'process.env': env})
  ],
};