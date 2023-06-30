const express = require('express');
const {
  executeTransaction,
  getTransactionsByHouseId,
  getAllTransactions
} = require('../controllers/transactionController');

const transactionRouter = express.Router();

transactionRouter.get('/', getAllTransactions);
transactionRouter.post('/', executeTransaction);
transactionRouter.get('/house/:houseId', getTransactionsByHouseId);

module.exports = transactionRouter;
