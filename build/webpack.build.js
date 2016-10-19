
var config = require('./webpack.config.js')

delete config.devServer

config.output = {
  filename: './dist/typewriter.js',
  library: 'VueTypewriter',
  libraryTarget: 'umd'
}

module.exports = config
