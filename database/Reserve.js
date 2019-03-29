const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const reserveSchema = new mongoose.Schema({
  restaurant: {
    $ref: 'restaurants',
    $id: 
  },
  date: Date,
  time: Date,
  chairs: Number,
  reserved: {type: Boolean, default: false}
});

const Reservation = mongoose.model('Reserve', reserveSchema);

module.exports = Reservation;