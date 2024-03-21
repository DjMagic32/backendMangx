const mongoose = require('mongoose');

const walletSchema = mongoose.Schema({
    owner           : { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    balance         : { type: Number, required: true, default: 0 }
});
module.exports = mongoose.model('wallet', walletSchema);
