var mongoose = require('mongoose');
const bcrypt   = require('bcrypt');

var companySchema = mongoose.Schema({
    email                   : String,
	code_country            : { type: String, default: null},
    phone                   : { type: String, default: null},
    first_name              : String,
    companyName             : { type: String, default: null},
    last_name               : String,
    second_last_name        : { type: String, default: null},
    data                    : { type: Object },
    step_status             : { type: String, default: "0" },
    verified                : { type: Boolean, default: false },
    password                : String,
    plan                    : { type: String, default: "Basic" },
    date_created            : { type: Date, default: Date.now },
    date_email_send         : { type: Date, default: () => Date.now() - 8*24*60*60*1000},
    status                  : { type: String, default: "Active" },
    tag                     : { type: Array,  default: ['All'] },
    first_login             : { type: Boolean, default: true },  
	progress                : { type: Number, default: 0} ,
    recovery_password_token : String,
    mails_sent: {
          login: Date,
          recovery_password: Date,
          old_company: Date,
    },
    number_checked: {type: Boolean, default: false}
});

companySchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

/**
 * @param {String} password 
 * @returns checking if password is valid
 */
companySchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);  // Corregido aquí
};

module.exports = mongoose.model( 'Company', companySchema );
