// Modelo de coches.
var mongoose = require('mongoose');
const autopopulate = require('mongoose-autopopulate');

var carSchema = mongoose.Schema({
    user                    : { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    marca                   : { type: String, default: null},
    modelo                  : { type: String, default: null},
    año                     : { type: String, default: null},
    matricula               : { type: String, default: null},
    color                   : { type: String, default: null},
    data                    : { type: Object },
    verified                : { type: Boolean, default: false },
    date_created            : { type: Date, default: Date.now },
    date_email_send         : { type: Date, default: () => Date.now() - 8*24*60*60*1000},
    status                  : { type: String, default: "Active" },
    tag                     : { type: Array,  default: ['All'] },
    mails_sent: {
          login: Date,
          recovery_password: Date,
    },
    number_checked: {type: Boolean, default: false}
});

carSchema.plugin(autopopulate); 


module.exports = mongoose.model('car', carSchema);
