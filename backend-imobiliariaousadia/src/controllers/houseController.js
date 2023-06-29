// house.controller.js

const House = require('../model/houseModel');

// Function to get all houses
const getAllHouses = async (req, res) => {
  try {
    const houses = await House.find();
    res.json(houses);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Function to get a house by ID
const getHouseById = async (req, res) => {
  try {
    const houseId = req.params.id;
    const house = await House.findById(houseId);
    
    if (!house) {
      return res.status(404).json({ error: 'House not found' });
    }
    
    res.json(house);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Function to create a new house
const createHouse = async (req, res) => {
    try {
      const house = await House.create(req.body);
      res.status(201).json(house);
    } catch (error) {
      console.error('Error creating house:', error);
      if (error.name === 'ValidationError') {
        const validationErrors = Object.values(error.errors).map(err => err.message);
        res.status(400).json({ error: validationErrors });
      } else {
        res.status(500).json({ error: 'Internal Server Error' });
      }
    }
  };
  

// Function to update a house by ID
const updateHouseById = async (req, res) => {
  try {
    const houseId = req.params.id;
    const updatedHouse = await House.findByIdAndUpdate(houseId, req.body, { new: true });
    
    if (!updatedHouse) {
      return res.status(404).json({ error: 'House not found' });
    }
    
    res.json(updatedHouse);
  } catch (error) {
    res.status(400).json({ error: 'Invalid request' });
  }
};

// Function to delete a house by ID
const deleteHouseById = async (req, res) => {
  try {
    const houseId = req.params.id;
    const deletedHouse = await House.findByIdAndRemove(houseId);
    
    if (!deletedHouse) {
      return res.status(404).json({ error: 'House not found' });
    }
    
    res.json(deletedHouse);
  } catch (error) {
    res.status(400).json({ error: 'Invalid request' });
  }
};

module.exports = {
  getAllHouses,
  getHouseById,
  createHouse,
  updateHouseById,
  deleteHouseById
};
