const mongoose = require('mongoose');
const faker = require('faker');
const db = require('./index.js');
const Restaurant = require('./Restaurant.js');

let name = faker.commerce.productName;
let restId = faker.random.number;
let open = faker.random.number;
let closed = faker.random.number;

const buildRestaurantDocs = () => {
  var collectDocs = [];
  for (var i = 0; i < 100; i++) {
    var fakeDoc = {
      _id: new mongoose.Types.ObjectId(),
      name: name(),
      restaurantId: restId(),
      open: open({min: 8, max: 11}) + ':00 am',
      close: closed({min: 3, max: 11}) + ':00 pm'
    }
    collectDocs.push(fakeDoc);
  }
  Restaurant.insertMany(collectDocs)
    .then(() => db.close())
    .catch((err) => {
      console.error(err);
    });
};

buildRestaurantDocs();