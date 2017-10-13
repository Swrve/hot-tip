var ExtractTextPlugin = require('extract-text-webpack-plugin')

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
    }]
  },
  entry: {
    hotTip: ['./src/index.js', './src/styles.scss']
  },
  output: {
    path: __dirname + '/lib',
    filename: '[NAME].bundle.js',
    publicPath: '/lib'
  },
  plugins: [
    new ExtractTextPlugin('[name].style.css')
  ],
  resolve: {
    extensions: ['.scss', '.css', '.js', '.jsx']
  },
  externals: {
    "react": "umd react",
    "react-redux": "umd react-redux",
    "redux": "umd redux"
  }
}
