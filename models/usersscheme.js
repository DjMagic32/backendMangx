const mongoose = require('mongoose');
const bcrypt   = require('bcrypt');

const userSchema = mongoose.Schema({
    email                : String,
    password             : String,
    firstName            : String,
    lastName             : String,
    cedulaIdentidad      : String,
    deleted              : {type: Boolean, default: false},
    userType             : {type: String, default: "internal-app"},
    resetPasswordToken   : String,
    resetPasswordExpires : Date,
    createdAt      : {
        type: Date,
        default: Date.now
    },
});