var path = require("path");

module.exports = {
  entry: './src/app.js',
  output: {
    path: './static',
    filename: 'app.js',
		library: "app",
		libraryTarget: "umd",
    publicPath: ''
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loaders: [
          'babel'
        ]
      },
      {
        test: /\.scss$/,
        loaders: [
          'style',
          'css',
          'sass'
        ]
      }
    ]
  }
}
