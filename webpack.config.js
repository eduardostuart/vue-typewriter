var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: './dist',
    publicPath: '/dist/',
    filename: 'typewriter.js'
  },
  resolve: {
    root: path.resolve('./')
  },
  module: {
    loaders: [
      {test: /\.vue$/, loader: 'vue' },
      {test: /\.js$/,exclude: /node_modules/,loader: 'babel'},
      {test: /\.scss$/, loader: "style!css!sass"}
    ]
  },
  babel: {
  presets: ['es2015'],
  plugins: ['transform-runtime']
},
  devtool: 'source-map'
};


if (process.env.NODE_ENV === 'production') {
  delete module.exports.devtool;
  module.exports.plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ];
}
