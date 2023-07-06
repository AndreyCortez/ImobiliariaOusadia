const Offer = require('../models/offerModel');
const SoldHouse = require('../models/soldHouseModel');
const House = require('../models/houseModel');

const getUserOffersWithHouseDetails = async (req, res) => {
  try {
    const { userId } = req.params;

    console.log( userId);

    // Fetch offers by userId and populate house details
    const offers = await Offer.find({ userId }).populate('houseId');

    res.json(offers);
  } catch (error) {
    console.error('Error fetching user offers:', error);
    res.status(500).json({ error: 'Failed to retrieve user offers' });
  }
};


// Execute an offer
const executeOffer = async (req, res) => {
  try {
    const { houseId, value, paymentMethod, userId } = req.body;
    // Create a new offer
    const newOffer = new Offer({
      houseId,
      value,
      paymentMethod,
      userId,
      status: 'pending', // Set the status to 'pending' by default
    });

    // Save the offer to the database
    await newOffer.save();

    return res.status(201).json(newOffer);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

// Retrieve offers by houseId
const getOffersByHouseId = async (req, res) => {
  const { houseId } = req.params;

  try {
    const offers = await Offer.find({ houseId });

    if (offers.length === 0) {
      return res.status(404).json({ error: 'No offers found for the specified house ID.' });
    }

    res.status(200).json(offers);
  } catch (error) {
    console.error('Error retrieving offers:', error);
    res.status(500).json({ error: 'An error occurred while retrieving offers.' });
  }
};

// Retrieve offers by userId
const getOffersByUser = async (req, res) => {
  const { userId } = req.params;

  try {
    const offers = await Offer.find({ userId });

    if (offers.length === 0) {
      return res.status(404).json({ error: 'No offers found for the specified user ID.' });
    }

    res.status(200).json(offers);
  } catch (error) {
    console.error('Error retrieving offers:', error);
    res.status(500).json({ error: 'An error occurred while retrieving offers.' });
  }
};

// Get all offers
const getAllOffers = async (req, res) => {
  try {
    const offers = await Offer.find();
    res.json(offers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get all pending offers
const getAllOffersPending = async (req, res) => {
  try {
    const pendingOffers = await Offer.find({ status: 'pending' });
    res.json(pendingOffers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update offer status and create SoldHouse if accepted
const updateOffer = async (req, res) => {
  const { offerId } = req.params;
  const { status, realtorId } = req.body;

  try {
    const updatedOffer = await Offer.findByIdAndUpdate(
      offerId,
      { status, realtorId },
      { new: true }
    );

    if (!updatedOffer) {
      return res.status(404).json({ error: 'Offer not found' });
    }

    if (status === 'accepted') {
      const { houseId, userId } = updatedOffer;

      const soldHouse = new SoldHouse({
        realtorId,
        clientId: userId,
        houseId,
      });

      await soldHouse.save();
    }

    res.status(200).json(updatedOffer);
  } catch (error) {
    console.error('Error updating offer:', error);
    res.status(500).json({ error: 'Failed to update offer' });
  }
};


module.exports = {
  executeOffer,
  getOffersByHouseId,
  getOffersByUser,
  getAllOffers,
  getAllOffersPending,
  updateOffer,
  getUserOffersWithHouseDetails
};
