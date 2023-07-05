const express = require('express');
const {
  createSoldHouse,
  getSoldHouses,
  getSoldHouseById,
  getSoldHousesByRealtorId
} = require('../controllers/soldHouseController');

const soldHouseRouter = express.Router();

soldHouseRouter.post('/', createSoldHouse);
soldHouseRouter.get('/', getSoldHouses);
soldHouseRouter.get('/:id', getSoldHouseById);
soldHouseRouter.get('/agents/:realtorId', getSoldHousesByRealtorId)

module.exports = soldHouseRouter;
