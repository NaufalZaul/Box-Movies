const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

HtmlWebpackPlugin
module.exports = {
  entry: {
    app: path.resolve(__dirname, './src/script/main.js')
  },
  output: {
    filename: './bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/html/index.html',
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/html/schedule.html',
      filename: 'schedule.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/html/genre.html',
      filename: 'genre.html',
    }),
  ]
}