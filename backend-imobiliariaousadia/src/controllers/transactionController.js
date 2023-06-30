const Transaction = require('../models/transactionModel');

// Execute a transaction
const executeTransaction = async (req, res) => {
  try {
    const { houseId, value, paymentMethod } = req.body;
    // Create a new transaction
    const transaction = new Transaction({
      houseId,
      value,
      paymentMethod
    });

    // Save the transaction to the database
    await transaction.save();

    return res.status(201).json(transaction);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

// Retrieve transactions by houseId
const getTransactionsByHouseId = async (req, res) => {
  const { houseId } = req.params;

  try {
    const transactions = await Transaction.find({ houseId });

    if (transactions.length === 0) {
      return res.status(404).json({ error: 'No transactions found for the specified house ID.' });
    }

    res.status(200).json(transactions);
  } catch (error) {
    console.error('Error retrieving transactions:', error);
    res.status(500).json({ error: 'An error occurred while retrieving transactions.' });
  }
};


// Get all transactions
const getAllTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.json(transactions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  executeTransaction,
  getTransactionsByHouseId,
  getAllTransactions
};
