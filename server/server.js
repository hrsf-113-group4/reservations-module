const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3002;

const Reserves = require('../database/Reserve.js');

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});

app.get('/resaturants/:id/:date/:party', (req, res) => {
  Reserves.find({ restaurantId: req.params.id, date: req.params.date, chairs: req.params.party }).populate('restaurant', 'restaurantId')
    .catch(err => res.send(err))
    .then((reservations) => {
      res.send(reservations);
    });
});
