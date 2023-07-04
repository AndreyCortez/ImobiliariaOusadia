const express = require('express');

const handleUpload = require('../controllers/upload');

const fileRouter = express.Router();

fileRouter.post('/upload', handleUpload);

module.exports = fileRouter;