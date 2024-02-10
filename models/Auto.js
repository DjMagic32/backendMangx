const mongoose = require('mongoose');

var AutoSchema = mongoose.Schema({

  modelo                    : String, 
  placa                     : String,
  licencia                  : String, 
  usuario                   : { type: Schema.Types.ObjectId, ref: 'User' },
  date_created              : { type: Date, default: Date.now }, 
  date_updated              : { type: Date, default: Date.now },
});

module.exports = mongoose.model( 'Auto', mangasSchema );

