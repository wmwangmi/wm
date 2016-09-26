//https://github.com/shelljs/shelljs
require('shelljs/global');
var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var shellStcUrl = path.join(path.resolve(__dirname,'dist'))
rm('-rf', shellStcUrl)
mkdir('-p', shellStcUrl)
cp('-R', 'shellstatic/', shellStcUrl)

module.exports = {

  entry: {
    main:path.join(__dirname, 'main.js')
  },

  output: {
    path: path.resolve(__dirname,'dist'),
    publicPath: './',
    filename: '[name][hash].js'
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


  vue: {
      loaders: {
          js: 'babel?{"presets":["es2015"]}'
      }
  },


  resolve: {
      root: [
          path.resolve(__dirname),
          path.resolve(__dirname, 'js')
      ],
      extensions: [
          '',
          '.js',
          '.vue'
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
      inject: true,
      hash: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      }
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
