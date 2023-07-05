const mongoose = require('mongoose');

const offerSchema = new mongoose.Schema({
  houseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'House',
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
  paymentMethod: {
    type: String,
    required: true,
  }, 
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'House',
    required: true,
  },
  status: {
    type: String,
    required: true,
  }
});

const offer = mongoose.model('offer', offerSchema);

module.exports = offer;
