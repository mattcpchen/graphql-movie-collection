import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';



const sharedProdPlugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.UglifyJsPlugin({comments: false}),
  new webpack.DefinePlugin({
    'process.env': {NODE_ENV: JSON.stringify('production')}
  })
];



const config = {
  devtool: 'eval-source-map',
  entry:  __dirname + "/client/app.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js",
    publicPath: '/'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015','react','stage-2']
      }
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('style', 'css?sourceMap!sass?sourceMap'),
      include: __dirname + "/client"
    }]
  },
  devServer: {
    contentBase: "./public",
    colors: true,
    historyApiFallback: true,
    inline: true
  },
  plugins: [
    new ExtractTextPlugin("styles.css")
  ]
};




if (process.env.NODE_ENV === 'production') {
  config.devtool = false;
  config.plugins = config.plugins.concat(sharedProdPlugins);
} else {
  const ProgressBarPlugin = require('progress-bar-webpack-plugin');
  config.plugins = config.plugins.concat([
    new ProgressBarPlugin({ clear: false })
  ]);
}
  



module.exports = config;
