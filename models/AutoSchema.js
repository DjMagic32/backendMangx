const mongoose = require('mongoose');

var CarSchema = mongoose.Schema({

  modelo                    : String, 
  placa                     : String,
  licencia                  : String, 
  usuario                   : String, 
  date_created              : { type: Date, default: Date.now }, 
  date_updated              : { type: Date, default: Date.now },
});


