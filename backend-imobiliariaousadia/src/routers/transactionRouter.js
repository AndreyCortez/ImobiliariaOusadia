const express = require('express');
const {
  executeTransaction,
  getTransactionsByHouseId
} = require('../controllers/transactionController');

const transactionRouter = express.Router();

transactionRouter.post('/', executeTransaction);
transactionRouter.get('/house/:houseId', getTransactionsByHouseId);

module.exports = transactionRouter;
