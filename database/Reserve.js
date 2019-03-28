const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const reserveSchema = new mongoose.Schema({
  restaurantId: Number,
  tableId: Number,
  date: timestamp,
  time: timestamp,
  chairs: Number,
  reserved: {type: Boolean, default: false}
});

const Reserve = mongoose.model('Reserve', reserveSchema);

module.exports = Reserve;