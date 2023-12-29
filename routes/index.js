// =============================================================================
// PACKAGES
// =============================================================================
const express   = require('express');
const app       = express.Router();
const passport  = require('passport');
// =============================================================================
// MIDDLEWARES
// =============================================================================
//const Auth  = require('../controllers/auth');
const Mid   = require('../middlewares/index');
// =============================================================================
// CONTROLLER
// =============================================================================
const { 
	indexController
} = require('../controllers/main/manager');
//==============================================================================
// HOME PAGES
//==============================================================================
// Las rutas apuntan al controlador de Index, si quieres coloca el sistema de login también ahí, así dejamos acá solo rutas <=====
app.get('/', Mid.isValidToken, indexController.render.home);

app.get('/failsafe',  function(req, res) {
  res.status(200).send('Funciona correctamente');
});

module.exports = app;
