const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const restaurantSchema = new mongoose.Schema({
  name: String,
  restaurantId: String,
  open: String,
  closed: String
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;