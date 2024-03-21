// var nodemailer = require( "nodemailer" );
var transporter = require( "../helpers/utils" );
const mongoose = require('mongoose');


// Modelo preliminar. Probablemente sea borrado en un futuro.

var mensaje = {
    from        : String,
    to          : String,
    subject     : String,
    text        : String,
    html        : "<p>HTML version of the message</p>",
  };
  


module.exports = mongoose.model('nodemailer', mensaje);
