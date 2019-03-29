const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const restaurantSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  restaurantId: String,
  open: String,
  close: String
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;