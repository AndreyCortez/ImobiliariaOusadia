const mongoose = require('mongoose');

const SoldHouseSchema = new mongoose.Schema({
  realtorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  houseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'House',
    required: true,
  },
});

const SoldHouse = mongoose.model('SoldHouse', SoldHouseSchema);

module.exports = SoldHouse;
