// houseRouter.js

const express = require('express');
const houseRouter = express.Router();

// Import the house controller
const houseController = require('../controllers/houseController');

// GET /houses
houseRouter.get('/', houseController.getAllHouses);

// GET /houses/:id
houseRouter.get('/:id', houseController.getHouseById);

// POST /houses
houseRouter.post('/', houseController.createHouse);

// PUT /houses/:id
houseRouter.put('/:id', houseController.updateHouseById);

// DELETE /houses/:id
houseRouter.delete('/:id', houseController.deleteHouseById);

module.exports = houseRouter;
