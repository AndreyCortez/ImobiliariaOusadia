const mongoose = require('mongoose');

const SoldHouseSchema = new mongoose.Schema({
  realtorCPF: {
    type: String,
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
