const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const reserveSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Restaurant'
  },
  date: Date,
  time: String,
  chairs: Number,
  reserved: {type: Boolean, default: false}
});

const Reservation = mongoose.model('Reserve', reserveSchema);

module.exports = Reservation;