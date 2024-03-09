var mongoose = require('mongoose');
const autopopulate = require('mongoose-autopopulate');

var companySchema = mongoose.Schema({
    user                    : { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    emailCompany            : String,
    rif                     : String,
	code_country            : { type: String, default: null},
    phone                   : { type: String, default: null},
    companyName             : { type: String, default: null},
    data                    : { type: Object },
    step_status             : { type: String, default: "0" },
    verified                : { type: Boolean, default: false },
    plan                    : { type: String, default: "Basic" },
    date_created            : { type: Date, default: Date.now },
    date_email_send         : { type: Date, default: () => Date.now() - 8*24*60*60*1000},
    status                  : { type: String, default: "Active" },
    tag                     : { type: Array,  default: ['All'] },
    first_login             : { type: Boolean, default: true },  
	progress                : { type: Number, default: 0} ,
    mails_sent: {
          login: Date,
          recovery_password: Date,
          old_company: Date,
    },
    number_checked: {type: Boolean, default: false}
});

companySchema.plugin(autopopulate); 


module.exports = mongoose.model('Company', companySchema);
