const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'dl-rsc-as-file.js',
    library: 'downloadAs',
    libraryTarget: 'umd'
  }
}
