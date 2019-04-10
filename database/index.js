const mongoose = require('mongoose');

const mongoUrl = 'mongodb://localhost/reserve';

const db = mongoose.connect(mongoUrl);

module.exports = db;
