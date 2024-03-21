const mongoose = require('mongoose');

const transactionSchema = mongoose.Schema({
    wallet          : { type: mongoose.Schema.Types.ObjectId, ref: 'wallet', required: true },
      type          : { type: String, enum: ['deposit', 'withdrawal', 'transfer'], required: true },
      amount        : { type: Number, required: true },
      date: {
        type: Date,
        default: Date.now
      }
    });
module.exports = mongoose.model('transaction', transactionSchema);
