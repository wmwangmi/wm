var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config');

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  	publicPath: "/",
  	hot: true,
    historyApiFallback: false,
	stats: {
	    colors: true,
	    chunks: false
	}
}));

hotMiddleware=require('webpack-hot-middleware')(compiler);
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})
app.use(hotMiddleware);
app.use(express.static(__dirname));
// app.use(__dirname, express.static('./static'))

app.listen(8281, function () {
  console.log('Server listening on http://localhost:8281, Ctrl+C to stop')
});
