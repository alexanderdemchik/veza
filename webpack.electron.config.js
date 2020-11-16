const path = require('path');
const { DefinePlugin } = require('webpack');
const env = require('dotenv').config().parsed;

module.exports = {
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  devtool: 'source-map',
  entry: './src/electron/main.ts',
  target: 'electron-main',
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
  },
  plugins: [
    new DefinePlugin(env)
  ]
};