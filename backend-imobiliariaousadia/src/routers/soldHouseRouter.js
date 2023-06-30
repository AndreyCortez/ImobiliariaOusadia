const express = require('express');
const {
  createSoldHouse,
  getSoldHouses,
  getSoldHouseById,
} = require('../controllers/soldHouseController');

const soldHouseRouter = express.Router();

soldHouseRouter.post('/', createSoldHouse);
soldHouseRouter.get('/', getSoldHouses);
soldHouseRouter.get('/:id', getSoldHouseById);

module.exports = soldHouseRouter;
