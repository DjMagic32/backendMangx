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
app.get('/get-company/:companyId', companyController.get.findCompanyById);
app.get('/all-company', companyController.get.findAllCompany);
app.delete('/remove/:companyId', companyController.delete.removeCompany);
app.put('/update-company/:companyId', companyController.put.updateCompany);




module.exports = app;