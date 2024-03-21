// PAQUETES
const express = require('express');
const app = express.Router();
//const multer  = require('multer');
//const upload  = multer({ dest: 'uploads/' });

// MIDDLEWARES

//const {isValidToken} = require("../middlewares/index");

// CONTROLADORES

const {
	transactionController
} = require('../controllers/main/manager');

app.post('/wallets/:walletId/transactions', transactionController.post.transferFunds); // Petición POST para hacer una transacción.



module.exports = app;