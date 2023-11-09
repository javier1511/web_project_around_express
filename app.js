const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const { PORT = 3000, BASE_PATH = '.' } = process.env;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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
app.listen(PORT, () => {
  console.log('Enlace al servidor');
  console.log(BASE_PATH);
});
