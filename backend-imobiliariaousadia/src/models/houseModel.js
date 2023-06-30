// house.model.js

const mongoose = require('mongoose');

// Define the house schema
const houseSchema = new mongoose.Schema({
  bedrooms: {
    type: Number,
    required: true
  },
  bathrooms: {
    type: Number,
    required: true
  },
  garage: {
    type: Number,
    required: true
  },
  estimatedValue: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  realtorCPF: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  typeOfProperty: {
    type: String,
    required: true
  },
  landSize: {
    type: Number,
    required: true
  },
});

// Create the house model
const House = mongoose.model('House', houseSchema);

module.exports = House;
