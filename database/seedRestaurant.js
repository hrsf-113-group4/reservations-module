const mongoose = require('mongoose');
const faker = require('faker');
const db = require('./index.js');
const Restaurant = require('./Restaurant.js');

let name = faker.commerce.productName();
let restId = faker.random.alphaNumeric(5);
let open = faker.random.number({min: 8, max: 11}) + ':00 am';
let closed = faker.random.number({min: 3, max: 11}) + ':00 pm';

const buildRestaurantDocs = () => {
  var collectDocs = [];
  for (var i = 0; i < 100; i++) {
    var fakeDoc = {
      _id: new mongoose.Types.ObjectId(),
      name: name,
      restaurantId: restId,
      open: open,
      close: closed
    }
    collectDocs.push(fakeDoc);
  }
  Restaurant.insertMany(collectDocs)
    .then(() => db.disconnect())
    .catch((err) => {
      console.error(err);
    });
};

buildRestaurantDocs();