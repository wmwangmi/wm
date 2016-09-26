var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var projectRoot = path.resolve(__dirname, './')

module.exports = {

  entry: {
    main:path.join(__dirname, 'main.js')
  },

  output: {
    path: '/dist',
    publicPath: './',
    filename: 'dist/[name][hash].js',
    chunkFilename: "[id].[hash].js"
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.vue$/, loader: 'vue'},
      { test: /\.css$/, loader: 'style!css'},
      { test: /\.less$/, loader: 'style!css!autoprefixer!less' },
      {
        test: /\.html$/,
        loader: 'vue-html'
      },
      // { test: /\.(png|jpg|gif)$/, loader: 'file?name=static/images/[name].[ext]' },
      {
        test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 1000,
          name: "static/images/[name].[hash:7].[ext]"
        }
      }
    ]
  },

  babel: {
    presets: ['es2015', 'stage-0'],
    plugins: ['transform-runtime']
  },

  plugins: [
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"uat"'
        }
    }),
    new HtmlWebpackPlugin({
      filename:  'index.html',
      template: 'index.html',
      inject: true
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]

}
