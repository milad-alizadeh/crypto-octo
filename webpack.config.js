const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const port = process.env.PORT || 3000;

module.exports = {
  mode: 'development',
  entry: {
    vendor: [
      'axios',
      'babel-polyfill',
      'chart.js',
      'chartjs-plugin-annotation',
      'history',
      'lodash',
      'moment',
      'prop-types',
      'react',
      'react-delay-render',
      'react-dom',
      'react-redux',
      'react-router-dom',
      'react-transition-group',
      'redux',
      'redux-form',
      'redux-saga',
      'styled-components',
      'styled-components-breakpoint',
      'styled-components-modifiers',
      'validator'
    ],
    app: './src/index.js'
  },
  output: {
    filename: '[name].[hash].js',
    publicPath: '/'
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, './src/components/'),
      containers: path.resolve(__dirname, './src/containers/'),
      hocs: path.resolve(__dirname, './src/hocs/'),
      store: path.resolve(__dirname, './src/store/'),
      config: path.resolve(__dirname, './src/config')
    }
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(png|jpe?g|svg|woff2?|ttf|eot)$/,
        loader: 'url-loader?limit=8000'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    })
  ],
  devServer: {
    host: 'localhost',
    port: port,
    historyApiFallback: true,
    open: true,
    hot: true
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          name: 'vendor',
          test: 'vendor',
          enforce: true
        }
      }
    }
  }
};
