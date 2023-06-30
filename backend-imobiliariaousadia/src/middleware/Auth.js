// middlewares/auth.js

const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config');

// Middleware function to authenticate user requests
const authenticateUser = (req, res, next) => {
  // Extract the token from the request headers, query string, or cookies
  const token = req.headers.authorization?.split(' ')[1] || req.query.token || req.cookies.token;

  if (!token) {
    return res.status(401).json({ error: 'Authentication required' });
  }

  try {
    // Verify and decode the token using the secret key
    const decoded = jwt.verify(token, jwtSecret);
    req.user = decoded; // Attach the user information to the request object
    next(); // Continue to the next middleware or route handler
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};

module.exports = authenticateUser;
