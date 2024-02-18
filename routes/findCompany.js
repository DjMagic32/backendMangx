// PACKAGES
const express = require('express');
const app = express.Router();

// CONTROLLERS

const {
	findCompanyController
} = require('../controllers/main/manager');

app.get('/companies', findCompanyController.get.findCompany); 
//Actualización antes del push: cambiado "app.post" por "app.get". 
//Revisión 2: cambiado parámetros del endpoint y la petición "get".

module.exports = app;