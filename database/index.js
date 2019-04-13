const mongoose = require('mongoose');

const mongoUrl = 'mongodb://172.17.0.2/16';

const db = mongoose.connect(mongoUrl);

module.exports = db;
