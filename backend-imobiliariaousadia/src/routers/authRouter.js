const express = require('express');
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');
const authRouter = express.Router();

// User registration
authRouter.post('/signup', userController.createUser);

authRouter.post('/login', authController.login);

module.exports = authRouter;

