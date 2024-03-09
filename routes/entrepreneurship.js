const express = require('express');
const app = express.Router();
//const multer  = require('multer');
//const upload  = multer({ dest: 'uploads/' });

// MIDDLEWARES

//const {isValidToken} = require("../middlewares/index");

// CONTROLLERS

const {
	entrepreneurshipController
} = require('../controllers/main/manager');

app.post('/create-entrepreneurship', entrepreneurshipController.post.createEntrepreneurship);
app.get('/all-entrepreneurship', entrepreneurshipController.get.findAllEntrepreneurships);
app.get('/get-entrepreneurship/:entrepreneurshipId', entrepreneurshipController.get.findEntrepreneurshipById);
app.put('/:entrepreneurship', entrepreneurshipController.put.updateEntrepreneurship);
app.delete('/:entrepreneurshipId', entrepreneurshipController.delete.removeEntrepreneurship);


module.exports = app;