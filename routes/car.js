// PAQUETES
const express = require('express');
const app = express.Router();
//const multer  = require('multer');
//const upload  = multer({ dest: 'uploads/' });

// MIDDLEWARES

//const {isValidToken} = require("../middlewares/index");

// CONTROLADORES

const {
	carController
} = require('../controllers/main/manager');

app.post('/create-car', carController.post.createCar); // Petición POST para registrar un coche.
app.get('/get-car/:carId', carController.get.findCarById); // Petición GET para encontrar un vehículo por ID.
app.get('/all-car', carController.get.findAllCar); // Petición GET para encontrar cualquier vehículo.
app.delete('/remove-car/:carId', carController.delete.removeCar); // Petición DEL para eliminar un vehículo.
app.put('/update-car/:carId', carController.put.updateCar); // Petición POST para actualizar datos de un vehículo.




module.exports = app;