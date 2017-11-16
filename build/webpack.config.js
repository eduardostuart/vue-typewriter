const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const resolve = dir => path.resolve(__dirname, '..', dir)

module.exports = {
  context: resolve('src'),
  entry: './index.js',
  output: {
    path: resolve('dist'),
    pathinfo: !(process.env.NODE_ENV === 'production'),
    publicPath: '/dist/',
    filename: 'typewriter.js'
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.vue|\.js$/,
        use: 'eslint-loader',
        exclude: /node_modules/,
        enforce: 'pre'
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'example.html',
      inject: false
    })
  ]
}
