const path = require('path');
const express = require('express');
const mongoose = require('mongoose');

const port = 3000;
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/arounddb');

app.use('/cards', require('./routes/cards'));
app.use('/users', require('./routes/users')); // Corregir el paréntesis de cierre

app.use((req, res, next) => {
  req.user = {
    _id: '654c2e033805e20d851a966e',
  };
  next();
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
});
