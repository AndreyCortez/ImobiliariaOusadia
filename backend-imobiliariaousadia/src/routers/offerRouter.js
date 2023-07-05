const express = require('express');
const {
  executeOffer,
  getOffersByHouseId,
  getOffersByUser,
  getAllOffers,
  getAllOffersPending,
  updateOffer
} = require('../controllers/offerController');

const offerRouter = express.Router();

offerRouter.get('/', getAllOffers);
offerRouter.post('/', executeOffer);
offerRouter.get('/house/:houseId', getOffersByHouseId);
offerRouter.get('/user/:userId', getOffersByUser);
offerRouter.get('/pending', getAllOffersPending);
offerRouter.put('/:offerId', updateOffer);

module.exports = offerRouter;
