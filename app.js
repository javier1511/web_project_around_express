const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const PORT = 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://127.0.0.1:27017/aroundb');

app.use('/cards', require('./routes/cards'));
app.use('/users', require('./routes/users'));

app.use((req, res, next) => {
  req.user = {
    _id: '654d8c87ef1129c2a10914bf',
  };
  next();
});

app.listen(PORT, () => {
});
