const faker = require('faker');
const db = require('./index.js');
const Restaurants = require('./Restaurant.js');

let name = faker.name.productName();
let restId = faker.random.alphaNumeric(5);
let open = faker.random.number({min: 8, max: 11}) + 'am';
let closed = faker.random.number({min: 3, max: 11}) + 'pm';

