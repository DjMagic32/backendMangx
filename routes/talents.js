// PACKAGES
const express = require('express');
const app = express.Router();
const multer  = require('multer');
const upload  = multer({ dest: 'uploads/' });

// MIDDLEWARES

const {isValidToken} = require("../middlewares/index");

// CONTROLLERS

const {
	talentsController
} = require('../controllers/main/manager');

app.get('/talent', isValidToken, talentsController.get.talent);

app.get('/getAll', isValidToken,talentsController.get.getAllTalents);

module.exports = app;