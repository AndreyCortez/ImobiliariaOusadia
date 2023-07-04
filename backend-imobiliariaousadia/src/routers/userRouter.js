const express = require('express');
const {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  getUsersByRole,
} = require('../controllers/userController');

const authenticateUser = require('../middleware/Auth');


const userRouter = express.Router();

userRouter.post('/', createUser);
userRouter.get('/', authenticateUser, getAllUsers);
userRouter.get('/:id', getUserById);
userRouter.put('/:id', updateUser);
userRouter.delete('/:id', deleteUser);
userRouter.get('/role/:role', getUsersByRole);

module.exports = userRouter;
