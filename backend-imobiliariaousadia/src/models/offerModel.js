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
    ref: 'User',
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'accepted', 'rejected'],
    default: 'pending',
  },
  realtorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }
});

const Offer = mongoose.model('Offer', offerSchema);

module.exports = Offer;
