// PACKAGES
const express = require('express');
const app = express.Router();
const multer  = require('multer');
const upload  = multer({ dest: 'uploads/' });

// MIDDLEWARES

// CONTROLLERS
const {
	mangaController
} = require('../controllers/main/manager');


// Crear manga
app.post('/mangas', mangaController.post.createManga);

// Obtener manga por ID
app.get('/mangas/:id', mangaController.get.getMangaByID);

// Actualizar manga por ID
app.post('/mangas/:id', mangaController.post.updateManga);

// Eliminar manga por ID
app.delete('/mangas/:id', mangaController.post.deleteManga);

// Buscar manga por título
app.get('/mangas/find', mangaController.get.findManga);

// Iterar sobre cada página de un PDF local
app.get('/pdf/iterate', mangaController.get.iterateOverPDF);

app.get('/AllMangas', mangaController.get.findAllMangas);
module.exports = app;