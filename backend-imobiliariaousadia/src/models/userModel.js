const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  cpf: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
  },
  imgProfile: {
    type: String,
  },
  isAdmin: {
    type: Boolean,
    required: true,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
