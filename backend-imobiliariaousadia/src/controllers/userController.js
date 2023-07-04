const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const multer = require('multer');
const path = require('path');

// Create a new user
const createUser = async (req, res) => {
  try {
    const { name, email, password, cpf, isAdmin, imgProfile, phone } = req.body;

    // Check if the email or CPF already exists
    const existingUser = await User.findOne({ $or: [{ email }, { cpf }] });
    if (existingUser) {
      return res.status(409).json({ error: 'Email or CPF already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user instance
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      cpf,
      isAdmin,
      imgProfile,
      phone,
    });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};



const getUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id, { password: 0 });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'Failed to fetch user' });
  }
};
    
const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, password, isAdmin, phone, imgProfile } = req.body;

  try {
    const updateFields = { name, email, password, isAdmin };
    if (phone) {
      updateFields.phone = phone;
    }
    if (imgProfile) {
      updateFields.imgProfile = imgProfile;
    }

    const user = await User.findByIdAndUpdate(id, updateFields, { new: true });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    console.log('User updated:', user);
    res.json(user);
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'Failed to update user' });
  }
};


const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    console.log('User deleted:', user);
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'Failed to delete user' });
  }
};

const getUsersByRole = async (req, res) => {
  const { role } = req.params;

  try {
    const users = await User.find({ isAdmin: role === 'admin' });
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, { password: 0 });
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
};

module.exports = {
    createUser,
    getUserById,
    updateUser,
    deleteUser,
    getUsersByRole,
    getAllUsers, 
  };
