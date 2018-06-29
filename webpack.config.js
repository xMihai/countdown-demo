const HtmlWebPackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const htmlPlugin = new HtmlWebPackPlugin({
  template: 'index.html',
  filename: 'index.html',
})

const copyPlugin = new CopyWebpackPlugin(['locales/**/*.json'])

module.exports = {
  mode: 'development',
  context: __dirname + '/src',
  entry: './index.tsx',
  plugins: [htmlPlugin, copyPlugin],
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: 'ts-loader' }],
  },
}
