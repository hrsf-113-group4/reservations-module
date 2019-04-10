const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3002;

const Reserves = require('../database/Reserve.js');

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res) => {
  res.setHeader('Access-Control-Allow-Methods', 'GET');
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});

app.get('/date/:date/:restaurantId/:party', (req, res) => {
  Reserves.find({ restaurantId: req.params.restaurantId, date: req.params.date, chairs: req.params.party }).populate('restaurant', 'restaurantId')
    .catch(err => res.send(err))
    .then((reservations) => {
      res.send(reservations);
    });
});
