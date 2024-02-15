// PACKAGES
const express = require('express');
const app = express.Router();
//const multer  = require('multer');
//const upload  = multer({ dest: 'uploads/' });

// MIDDLEWARES

//const {isValidToken} = require("../middlewares/index");

// CONTROLLERS

const {
	autoController
} = require('../controllers/main/manager');

app.post('/crate-auto', autoController.post.createAuto);

module.exports = app;