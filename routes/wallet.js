// PAQUETES
const express = require('express');
const app = express.Router();
//const multer  = require('multer');
//const upload  = multer({ dest: 'uploads/' });

// MIDDLEWARES

//const {isValidToken} = require("../middlewares/index");

// CONTROLADORES

const {
	userController
} = require('../controllers/main/manager');

// app.post('/create-wallet', userController.post.createUser); // Petición POST para registrar la billetera.



module.exports = app;