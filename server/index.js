if (process.env.NODE_ENV !== 'production') {
  require('babel-register');
}



const app = require('./app')();


app.listen(app.get('port'), function(err) {
  if(err) return;
  
  console.log('Server up ===> http://localhost:'+app.get('port'));
});
