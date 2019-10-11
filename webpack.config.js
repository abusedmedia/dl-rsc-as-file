const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'download-as.js',
    library: 'downloadAs',
    libraryTarget: 'umd'
  }
}
