var mongoose = require('mongoose');
const bcrypt   = require('bcrypt');

var mangasSchema = mongoose.Schema({

  title                     : String, 
  author                    : String,
  artist                    : String, 
  status                    : String, 
  genres                    : { type: Array },
  description               : String,
  chapters                  : { type: Array },
  pdf                       : String,
  thumbnail                 : String,
  date_created              : { type: Date, default: Date.now }, 
  date_updated              : { type: Date, default: Date.now },
});

module.exports = mongoose.model( 'Mangas', mangasSchema ); //kjghjhkgkjg
