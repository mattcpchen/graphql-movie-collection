import webpack from 'webpack';


const sharedProdPlugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.UglifyJsPlugin({comments: false})
];



const config = {
  entry:  __dirname + "/server/index.js",
  target: 'node',
  node: {
    __filename: true,
    __dirname: true
  },
  output: {
    path: __dirname + "/dist",
    filename: "server.js",
    publicPath: '/'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015','stage-2']
      }
    }, {
      test: /\.json$/,
      loader: 'json'
    }]
  },
  plugins: []
};


// webpack_for_server only executed for production
config.plugins = config.plugins.concat(sharedProdPlugins);



module.exports = config;
