import express from 'express';
import path from 'path';
import graphqlHTTP from 'express-graphql';
import graphqlSchema from './graphql/schema';


module.exports = function() {
  
  const app = express();
  app.set('port', process.env.PORT || 8080);
  
  
  // webpack with HMR
  if (process.env.NODE_ENV === 'devForClient' ||
    process.env.NODE_ENV ==='development') {
    const webpack = require('webpack');
    const webpackConfig = require('../webpack.client.config.babel');
    const compiler = webpack(webpackConfig);
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpackHotMiddleware = require('webpack-hot-middleware');
    
    app.use(webpackDevMiddleware(compiler, {
      noInfo: true,
      publicPath: webpackConfig.output.publicPath
    }));
    app.use(webpackHotMiddleware(compiler));
  }
  
  
  // static routes
  app.use(express.static( path.join(__dirname, '../public/') ));
  app.use(express.static( path.join(__dirname, '../dist/') ));
  
  // routes
  app.get('/', _index);
  app.get('/all', _index);
  app.get('/popular', _index);
  app.get('/topRated', _index);
  app.get('/upcoming', _index);
  app.get('/collection', _index);
  
  
  // graphql
  app.use('/graphql', graphqlHTTP({
    graphiql: true,
    pretty: true,
    schema: graphqlSchema
  }));
  
  
  return app;
};







const _index = (req, res) => {
  const indexHtmlPath = path.join(__dirname, '../public/index.html');
  res.sendFile(indexHtmlPath);
}