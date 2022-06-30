var mongoose = require('mongoose');

var journeySchema = mongoose.Schema({
    departure: String,
    arrival: String,
    date: Date,
    price: Number,
});

var journeyModel = mongoose.model('journeys', journeySchema);

module.exports = journeyModel;