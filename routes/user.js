// PACKAGES
const express = require('express');
const app = express.Router();

// CONTROLLERS

const {
	userController
} = require('../controllers/main/manager');

app.post('/create-user', userController.post.createUser);
app.get('/all-users', userController.get.findAllUser);
app.get('/:userId', userController.get.findUserById);

module.exports = app;