var webpack = require('webpack')
var path = require('path')
var projectRoot = path.resolve(__dirname, '../');

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
    preLoaders: [
      {
        test: /\.vue$/,
        loader: 'eslint',
        include: projectRoot,
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'eslint',
        include: projectRoot,
        exclude: /node_modules/
      }
    ],
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
  eslint: {
    formatter: require('eslint-friendly-formatter')
  },
  devtool: 'source-map',
  devServer: {
    inline:true,
    port: 8080
  }
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

