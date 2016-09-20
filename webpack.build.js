
var config = require('./webpack.config.js')

config.output = {
  filename: './dist/typewriter.js',
  library: 'VueTypewriter',
  libraryTarget: 'umd'
}

module.exports = config
