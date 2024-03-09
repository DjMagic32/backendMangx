var mongoose = require('mongoose');
//const autopopulate = require('mongoose-autopopulate');

var notificationSchema = mongoose.Schema({
    user                    : { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    event_type              : { type: String},
    message                 : {type: String},
    isRead                  : { type: Boolean, default: false }
    },
    {
        timestamps  : { createdAt: 'created_at', updatedAt: 'updated_at' },
    }
);

//notificationSchema.plugin(autopopulate); 


module.exports = mongoose.model('notification', notificationSchema);
