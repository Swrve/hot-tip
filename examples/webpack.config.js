const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  target: 'web',
  module: {
    rules: [{
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [{
          loader: 'css-loader', options: {
            sourceMap: true
          }
        }, {
          loader: 'sass-loader', options: {
            sourceMap: true
          }
        }]
      })
    }, {
      test: /\.jsx?$/,
      use: [{
        loader: 'babel-loader'
      }]
    }, {
      test: /\.(png)$/,
      use: [{
        loader: 'file-loader'
      }]
    }]
  },
  entry: {
    examples: ['./examples/index.js', './examples/styles.scss'],
    'frame-example': ['./examples/frame-example.js', './examples/frame-example.scss'],
    hotTip: ['./src/index.js', './src/styles.scss']
  },
  output: {
    path: __dirname + '/lib',
    filename: '[NAME].bundle.js',
    publicPath: '/'
  },
  plugins: [
    new ExtractTextPlugin('[name].style.css'),
    new HtmlWebpackPlugin({
      title: 'Hot Tip - Examples',
      template: './examples/index.html',
      filename: 'index.html',
      chunks: ['examples', 'hotTip']
    }),
    new HtmlWebpackPlugin({
      title: 'Hot Tip - Frame - Examples',
      template: './examples/index.html',
      filename: 'frame-example.html',
      chunks: ['frame-example', 'hotTip']
    })
  ],
  devServer: {
    contentBase: "./examples"
  },
  resolve: {
    extensions: ['.scss', '.css', '.js', '.jsx']
  }
}
