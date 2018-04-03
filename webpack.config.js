const path = require('path');
const nodeExternals = require('webpack-node-externals');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  // 入口文件，entry
  entry: './src/index.js',
  // 出口
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    libraryTarget: 'commonjs2'
  },
  devtool: "sourcemap",
  // loader,处理非javascript文件
  module: {
    rules: [
      { 
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          fallback:"style-loader",
          use: ['css-loader','sass-loader']
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: "heki.css",
      disable: false,
      allChunks: true
      })
  ],
  externals: [nodeExternals()]
};

module.exports = config;