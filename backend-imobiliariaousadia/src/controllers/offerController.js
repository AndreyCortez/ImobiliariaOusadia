const offer = require('../models/offerModel');

// getOfferByUsers
// getAllOfferPendents


// Execute a offer
const executeoffer = async (req, res) => {
  try {
    const { houseId, value, paymentMethod } = req.body;
    // Create a new offer
    const offer = new offer({
      houseId,
      value,
      paymentMethod
    });

    // Save the offer to the database
    await offer.save();

    return res.status(201).json(offer);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

// Retrieve offers by houseId
const getoffersByHouseId = async (req, res) => {
  const { houseId } = req.params;

  try {
    const offers = await offer.find({ houseId });

    if (offers.length === 0) {
      return res.status(404).json({ error: 'No offers found for the specified house ID.' });
    }

    res.status(200).json(offers);
  } catch (error) {
    console.error('Error retrieving offers:', error);
    res.status(500).json({ error: 'An error occurred while retrieving offers.' });
  }
};


// Get all offers
const getAlloffers = async (req, res) => {
  try {
    const offers = await offer.find();
    res.json(offers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  executeoffer,
  getoffersByHouseId,
  getAlloffers
};
