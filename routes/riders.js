const express = require('express');
const app = express.Router();
//const multer  = require('multer');
//const upload  = multer({ dest: 'uploads/' });

// MIDDLEWARES

//const {isValidToken} = require("../middlewares/index");

// CONTROLLERS

const {
	ridersController
} = require('../controllers/main/manager');

app.post('/create-riders', ridersController.post.createRiders);
app.get('/all-riders', ridersController.get.findAllRiders);
app.get('/get-rider/:riderId', ridersController.get.findRiderById);
app.put('/:riderId', ridersController.put.updateRider);

module.exports = app;