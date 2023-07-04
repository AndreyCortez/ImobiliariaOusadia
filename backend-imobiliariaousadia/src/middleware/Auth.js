const jwt = require('jsonwebtoken');
const  config  = require('../config');

const authenticateUser = (req, res, next) => {
  try {
    // Check if the Authorization header is present
    if (!req.headers.authorization) {
      throw new Error('Authentication required');
    }

    // Extract the token from the Authorization header
    const token = req.headers.authorization.replace('Bearer ', '');

    // Verify and decode the token using the secret key
    const decoded = jwt.verify(token, config.jwtSecret);

    // Attach the user information to the request object
    req.user = decoded;

    // Continue to the next middleware or route handler
    next();
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

module.exports = authenticateUser;
