const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body',
})

module.exports = {
    entry: './src/index.js',
    mode: 'production',
    output: {
        path: path.resolve('dist'),
        filename: 'index.bundle.js'
    },
    module: {
        rules: [
          { test: /\.css$/,
            use: [
              { loader: "style-loader" },
              { loader: "css-loader" }
            ]
          },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: "babel-loader"
          }, {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: "babel-loader"
          }
        ]
    },
    plugins: [ HtmlWebpackPluginConfig ],
    devtool: 'cheap-module-source-map'
}