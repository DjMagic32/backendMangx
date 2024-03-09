const mongoose = require('mongoose');
const bcrypt   = require('bcrypt');

const userSchema = mongoose.Schema({
    email                : String,
    password             : String,
    userName             : String,
    first_name           : String,
    last_name            : String,
    cedula               : Number,             
    deleted              : {type: Boolean, default: false},
    userType             : {type: String, default: "internal-app"},
    resetPasswordToken   : String,
    resetPasswordExpires : Date,
    createdAt      : {
        type: Date,
        default: Date.now
    },
});
/**
 * @param {String} password 
 * @returns generating a hash
 */
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
/**
 * @param {String} password 
 * @returns checking if password is valid
 */
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};
module.exports = mongoose.model('User', userSchema);
