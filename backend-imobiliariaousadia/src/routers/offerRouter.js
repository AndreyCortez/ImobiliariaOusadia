const express = require('express');
const {
  executeoffer,
  getoffersByHouseId,
  getAlloffers
} = require('../controllers/offerController');

const offerRouter = express.Router();

offerRouter.get('/', getAlloffers);
offerRouter.post('/', executeoffer);
offerRouter.get('/house/:houseId', getoffersByHouseId);

module.exports = offerRouter;
