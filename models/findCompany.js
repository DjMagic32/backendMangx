var mongoose = require('mongoose');

var findCompany = mongoose.Schema({
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
    status                  : { type: String, default: "Active" },
    tag                     : { type: Array,  default: ['All'] },
});

module.exports = mongoose.model( 'findCompany', findCompany );