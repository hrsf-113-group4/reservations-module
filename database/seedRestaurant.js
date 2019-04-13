const mongoose = require('mongoose');
const faker = require('faker');
const db = require('./index.js');
const Restaurant = require('./Restaurant.js');

const name = faker.commerce.productName;
const open = faker.random.number;
const closed = faker.random.number;

const buildRestaurantDocs = () => {
  const collectDocs = [];
  let fakeDoc = {};
  for (let i = 100; i < 200; i++) {
    fakeDoc = {
      _id: new mongoose.Types.ObjectId(),
      name: name(),
      restaurantId: i,
      open: open({min: 8, max: 11}) + ':00 am',
      close: closed({min: 3, max: 11}) + ':00 pm'
    };
    collectDocs.push(fakeDoc);
  }
  Restaurant.insertMany(collectDocs)
    .then(() => mongoose.connection.close())
    .catch((err) => {
      console.error(err);
    });
};

buildRestaurantDocs();
