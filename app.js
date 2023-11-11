const express = require('express');
const mongoose = require('mongoose');

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://127.0.0.1:27017/aroundb');

app.use((req, res, next) => {
  req.user = {
    _id: '654d8c87ef1129c2a10914bf',
  };
  next();
});

app.use('/cards', require('./routes/cards'));
app.use('/users', require('./routes/users'));

app.listen(PORT, () => {
});
