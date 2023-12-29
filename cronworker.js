const path       = require('path');
const logger     = require('morgan');
const express    = require('express');
// mongoose         = require('mongoose'),
// configDB         = require('./config/database.js'),
port             = process.env.PORT || 8087;
const app = express();
/**
* FILES 
**/
const  BackgroundController      = require('./controllers/background');
/**
* CONEXIONS 
**/
// mongoose.connect(configDB.url, {
//   useNewUrlParser: true, 
//   useUnifiedTopology: true, 
//   useFindAndModify: false,
//   useCreateIndex: true
// });
/**
* ENVIROMENT 
**/
app.use(logger('dev', {
  skip: function (req, res) { return res.statusCode == 304 }
}))
global.url = 'http://localhost:'+port+'/';
/**
* PORT 
**/
app.listen(port);
console.log(`cronworker corriendo en: ${global.url}`);

module.exports = app;