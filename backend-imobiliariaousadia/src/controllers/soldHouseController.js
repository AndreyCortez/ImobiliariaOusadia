const SoldHouse = require('../models/soldHouseModel');

// Create a new sold house
async function createSoldHouse(req, res) {
  try {
    const { realtorId, clientId, houseId } = req.body;

    // Create a new instance of SoldHouse model
    const soldHouse = new SoldHouse({ realtorId, clientId, houseId });

    // Save the sold house to the database
    const savedSoldHouse = await soldHouse.save();

    res.status(201).json(savedSoldHouse);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create sold house' });
  }
}

// Get all sold houses
async function getSoldHouses(req, res) {
  try {
    const soldHouses = await SoldHouse.find();
    res.json(soldHouses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve sold houses' });
  }
}

// Get sold house by ID
async function getSoldHouseById(req, res) {
  try {
    const { id } = req.params;
    const soldHouse = await SoldHouse.findById(id);

    if (!soldHouse) {
      return res.status(404).json({ error: 'Sold house not found' });
    }

    res.json(soldHouse);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve sold house' });
  }
}

// Get sold houses by realtorId
async function getSoldHousesByRealtorId(req, res) {
  try {
    const { realtorId } = req.params;
    const soldHouses = await SoldHouse.find({ realtorId });

    if (soldHouses.length === 0) {
      return res.status(404).json({ error: 'No sold houses found for the specified realtor ID' });
    }

    res.json(soldHouses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve sold houses by realtor ID' });
  }
}

module.exports = {
  createSoldHouse,
  getSoldHouses,
  getSoldHouseById,
  getSoldHousesByRealtorId,
};
