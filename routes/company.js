// PACKAGES
const express = require('express');
const app = express.Router();
//const multer  = require('multer');
//const upload  = multer({ dest: 'uploads/' });

// MIDDLEWARES

//const {isValidToken} = require("../middlewares/index");

// CONTROLLERS

const {
	companyController
} = require('../controllers/main/manager');

app.post('/create-company', companyController.post.createCompany);

module.exports = app;