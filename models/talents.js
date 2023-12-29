var mongoose = require('mongoose');
const bcrypt   = require('bcrypt');

var talentsSchema = mongoose.Schema({
    email                   : String,
	code_country            : { type: String, default: null},
    phone                   : { type: String, default: null},
    indicative              : String,
    first_name              : String,
    middle_name             : { type: String, default: null},
    last_name               : String,
    second_last_name        : { type: String, default: null},
    occupation              : String,  //que profesion tengo
    occupation_to           : { type: Object,  default: [] },  //que cargo quiero
    data                    : { type: Object },
    skills                  : { type: Object, default: null },
    cv                      : { type: Object, default: null },
    step_status             : { type: String, default: "0" },
    verified                : { type: Boolean, default: false },
    password                : String,
    security_level          : { type: String, default: "1" },
    plan                    : { type: String, default: "Basic" },
    date_created            : { type: Date, default: Date.now },
    date_email_send         : { type: Date, default: () => Date.now() - 8*24*60*60*1000},
    status                  : { type: String, default: "Active" },
    tag                     : { type: Array,  default: ['All'] },
    lenguages               : { type: Array },
    first_login             : { type: Boolean, default: true },  
	progress                : { type: Number, default: 0} ,
    plus                    : { type: Boolean},
    moved_to_talent_old     : {type: Boolean},
    recovery_password_token : String,
    mails_sent: {
          login: Date,
          recovery_password: Date,
          old_talent: Date,
    },
    number_checked: {type: Boolean, default: false}
      

});


talentsSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
/**
 * @param {String} password 
 * @returns checking if password is valid
 */
 talentsSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};


talentsSchema.index({occupation_to: 'text', occupation: 'text'},{ default_language: "spanish" });
module.exports = mongoose.model( 'Talents', talentsSchema );
