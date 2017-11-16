const webpack = require('webpack')

const webpackConfig = require('./webpack.config.js')
const webpackMerge = require('webpack-merge')

// Plugins
const ProgressBarPlugin = require('progress-bar-webpack-plugin')

module.exports = webpackMerge(webpackConfig, {
  devtool: 'source-map',
  plugins: [
    new ProgressBarPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"dev"'
      }
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
})
