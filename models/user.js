const mongoose = require('mongoose');

const urlCondition = /(https:\/\/|http:\/\/)(w{3}\.)?[/\S]+\/?[^\S]*[#]?$/;

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2, 
    maxlength: 30,
    required: true,
  },
  about: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
    validate: {
      validator(c) {
        return urlCondition.test(c);
      },
      message: 'Invalid URL',
    },
  },
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
