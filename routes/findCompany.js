// PACKAGES
const express = require('express');
const app = express.Router();

// CONTROLLERS

const {
	findCompanyController
} = require('../controllers/main/manager');

app.get('/create-company', findCompanyController.post.findCompany); //Actualización antes del push: cambiado "app.post" por "app.get"

module.exports = app;