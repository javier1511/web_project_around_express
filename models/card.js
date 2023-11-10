const mongoose = require('mongoose');

const urlCondition = /(https:\/\/|http:\/\/)(w{3}\.)?[/\S]+\/?[^\S]*[#]?$/;

const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2, // La propiedad correcta es 'minlength', no 'minlenght'
    maxlength: 30,
    required: true, // La propiedad correcta es 'required', no 'require'
  },
  link: {
    type: String,
    required: true,
    validate: {
      validator(c) {
        return urlCondition.test(c);
      },
      message: 'La URL proporcionada no es válida',
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId, // Corregir la ubicación de la definición del campo 'owner'
    required: true,
    ref: 'user',
  },
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    default: [],
    ref: 'user',
  }],
  createdAt: {
    type: Date, // Cambiado 'createArt' a 'createdAt' por convención
    default: Date.now,
  },
});

const card = mongoose.model('card', cardSchema);
module.exports = card;
