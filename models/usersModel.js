var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    name: String,
    firstName: String,
    Email: String,
    password: String,
    cities: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'journeys',
        }
    ]
});

var userModel = mongoose.model('users', userSchema);

module.exports = userModel;