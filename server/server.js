const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3003;

const Reserves = require('../database/Reserve.js');

app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});

app.get('/date/:date', (req, res) => {
  Reserves.find({ date: req.params.date }).populate('restaurant')
    .catch(err => console.error(err))
    .then((reservations) => {
      res.send(reservations);
    });
});
