var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: {
		app: './src/app.js',
	},
  output: {
    path: './static',
    filename: '[name].js',
		library: "App",
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
  },
	plugins: [
		new webpack.ProvidePlugin({
			React: 'react'
		})
	]
}
