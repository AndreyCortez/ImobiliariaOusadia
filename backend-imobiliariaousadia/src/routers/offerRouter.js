const express = require('express');
const {
  executeOffer,
  getOffersByHouseId,
  getOffersByUser,
  getAllOffers,
  getAllOffersPending,
  updateOffer,
  getUserOffersWithHouseDetails
} = require('../controllers/offerController');

const offerRouter = express.Router();

offerRouter.get('/', getAllOffers);
offerRouter.post('/', executeOffer);
offerRouter.get('/house/:houseId', getOffersByHouseId);
offerRouter.get('/user/:userId', getOffersByUser);
offerRouter.get('/pending', getAllOffersPending);
offerRouter.put('/:offerId', updateOffer);
offerRouter.get('/houses/user/:userId', getUserOffersWithHouseDetails);

module.exports = offerRouter;
