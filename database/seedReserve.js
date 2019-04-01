const faker = require('faker');
const db = require('./index.js');
const Restaurants = require('./Restaurant.js');
const Reservations = require('./Reserve.js');
const mongoose = require('mongoose');

var reserveMatrix = function() {    
  var times = 20;
  var seats = 20;
  var resTable = [];
  var count = 0;
  for (var i = 0; i < seats; i++) {
      var seatCount = 0;
      resTable.push([]);
      for (var j = 0; j < times; j++) {
        if (count < 40 && seatCount < 2) {
          resTable[i].push(Math.floor(Math.random() * 2));
          if (resTable[i][j] === 1) {
              count++;
              seatCount++;
          } 
        } else {
            resTable[i].push(0);
        }
      }
  }
return resTable;
};

var timeKey = { 
  0: '2:00 pm',
  1: '2:15 pm',
  2: '2:30 pm',
  3: '2:45 pm',
  4: '3:00 pm',
  5: '3:30 pm',
  6: '3:45 pm',
  7: '4:00 pm',
  8: '4:15 pm',
  9: '4:30 pm',
  10: '4:45 pm',
  11: '5:00 pm',
  12: '5:15 pm',
  13: '5:30 pm',
  14: '5:45 pm',
  15: '6:00 pm',
  16: '6:15 pm',
  17: '6:30 pm',
  18: '6:45 pm',
  19: '7:00 pm'
};

Restaurants.find({})
  .catch((err) => {
    console.error(err);
  })
  .then((restList) => {
    var collectDocs = [];
    for (var i = 0; i < restList.length; i++) {
      for (var j = 0; j < 31; j++) {
        var resDate = new Date(2019, 3, 1 + j);
        var dayAvailability = reserveMatrix();
        for (var k = 0; k < dayAvailability.length; k++) {
          var seats = k;
          for (var l = 0; l < dayAvailability[k].length; l++) {
            if (dayAvailability[k][l] === 1) {
              var reservationTime = {
                _id: new mongoose.Types.ObjectId(),
                restaurant: restList[i]._id,
                date: resDate,
                time: timeKey[l],
                chairs: seats
              }
              collectDocs.push(reservationTime);
            }
          }
        }
      }
    }
    Reservations.insertMany(collectDocs)
      .then(() => db.close());
  });
