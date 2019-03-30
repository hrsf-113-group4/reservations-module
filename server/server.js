const express = require('express');
const path = require('path');
const app = express();
const port = 3003;
const Reserves = require('../database/Reserve.js');
const Restaurants = require('../database/Restaurant.js');

app.use(express.static(path.join(__dirname, '../public')));

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});

app.get('/date', (req, res) => {
  Reserves.find({"date": "2019-04-01T07:00:00.000Z"}).populate("restaurant")
    .catch((err) => console.error(err))
    .then((reservations) => {
      res.send(reservations);
      res.end();
    });
});