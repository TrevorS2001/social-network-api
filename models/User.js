const { Schema, model } = require('mongoose');
const moment = require('moment');

const UserSchema = new Schema({
username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/],
    },
thoughts: [
        {
            ref: 'Thought',
            type: Schema.Types.ObjectId,
            
        }
    ],
friends: [
        {
            ref: 'User',
            type: Schema.Types.ObjectId,
        }
    ]
},
    {
toJSON: {
            virtuals: true
        },
        id: false
    }
);

UserSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

const User = model('User', UserSchema);

module.exports = User;