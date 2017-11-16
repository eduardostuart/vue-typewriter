const webpack = require('webpack')
const config = require('./webpack.config.js')
const merge = require('webpack-merge')
const UnminifiedWebpackPlugin = require('unminified-webpack-plugin')

module.exports = merge(config, {
  output: {
    libraryTarget: 'umd',
    library: 'VueTypewriter',
    filename: 'typewriter.min.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      drop_console: true,
      compress: {
        warnings: false
      }
    }),
    new UnminifiedWebpackPlugin({
      postfix: ''
    })
  ]
})
