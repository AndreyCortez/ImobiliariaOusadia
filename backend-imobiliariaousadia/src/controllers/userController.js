const User = require('../models/userModel');

const createUser = async (req, res) => {
  const { cpf, name, email, password, isAdmin } = req.body;

  try {
    const user = await User.create({ cpf, name, email, password, isAdmin });
    console.log('User created:', user);
    res.status(201).json(user);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Failed to create user' });
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);
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
  const { name, email, password, isAdmin } = req.body;

  try {
    const user = await User.findByIdAndUpdate(id, { name, email, password, isAdmin }, { new: true });
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
      const users = await User.find();
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
    getAllUsers
  };
