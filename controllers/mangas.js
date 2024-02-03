// HELPERS
const _ = require("lodash");
const models = require("../helpers/models");

// MODULES
const { PDFDocument } = require("pdf-lib");


// REST FUNCTIONS
async function createManga(req, res) {
  try {
    let mangaData = req.body;

    if (mangaData) {
      let creationResult = await models.newDocument("mangas", mangaData);

      if (creationResult.error == null) {
        res.status(200).send({
          message: "Manga creado con éxito",
          data: creationResult.data,
          error: null,
        });
      } else {
        res.status(500).send({
          message: "No se pudo crear el manga",
          data: null,
          error: creationResult.error,
        });
      }
    } else {
      res.status(400).send({
        message: "Se requieren datos para crear el manga",
        data: null,
      });
    }
  } catch (error) {
    console.log("Error al crear el manga: ", error);
    res.status(500).send({
      message: "Error al procesar la solicitud de crear un manga",
      data: null,
      error: error,
    });
  }
}

// Controlador para obtener un manga por ID
async function getMangaByID(req, res) {
  try {
    let mangaId = req.params.id;

    if (mangaId) {
      let searchResult = await models.findById("manga", mangaId);

      if (searchResult.error == null) {
        res.status(200).send({
          message: "Consulta realizada con éxito",
          data: searchResult.data,
          error: null,
        });
      } else {
        res.status(500).send({
          message: "No se pudo realizar la búsqueda del manga",
          data: null,
          error: searchResult.error,
        });
      }
    } else {
      res.status(400).send({
        message: "Se requiere el ID del manga para la búsqueda",
        data: null,
      });
    }
  } catch (error) {
    console.log("Error al obtener el manga: ", error);
    res.status(500).send({
      message: "Error al procesar la solicitud de obtener un manga",
      data: null,
      error: error,
    });
  }
}

// Controlador para actualizar un manga por ID
async function updateManga(req, res) {
  try {
    let mangaId = req.params.id;
    let updateData = req.body;

    if (mangaId && updateData) {
      let updateResult = await models.findByIdAndUpdate(
        "mangas",
        mangaId,
        updateData
      );

      if (updateResult.error == null) {
        res.status(200).send({
          message: "Manga actualizado con éxito",
          data: updateResult.data,
          error: null,
        });
      } else {
        res.status(500).send({
          message: "No se pudo actualizar el manga",
          data: null,
          error: updateResult.error,
        });
      }
    } else {
      res.status(400).send({
        message: "Se requieren el ID del manga y los datos de actualización",
        data: null,
      });
    }
  } catch (error) {
    console.log("Error al actualizar el manga: ", error);
    res.status(500).send({
      message: "Error al procesar la solicitud de actualizar un manga",
      data: null,
      error: error,
    });
  }
}

// Controlador para eliminar un manga por ID
async function deleteManga(req, res) {
  try {
    let mangaId = req.params.id;

    if (mangaId) {
      let deleteResult = await models.remove("mangas", { _id: mangaId });

      if (deleteResult.error == null) {
        res.status(200).send({
          message: "Manga eliminado con éxito",
          data: deleteResult.data,
          error: null,
        });
      } else {
        res.status(500).send({
          message: "No se pudo eliminar el manga",
          data: null,
          error: deleteResult.error,
        });
      }
    } else {
      res.status(400).send({
        message: "Se requiere el ID del manga para eliminarlo",
        data: null,
      });
    }
  } catch (error) {
    console.log("Error al eliminar el manga: ", error);
    res.status(500).send({
      message: "Error al procesar la solicitud de eliminar un manga",
      data: null,
      error: error,
    });
  }
}

// Controlador para obtener un manga por title
async function findManga(req, res) {
  try {
    let title = req.body.title;

    if (title) {
      let query = { title: title };
      let search_manga = await models.findOne("mangas", query, null);

      if (search_manga.error == null && search_manga.data != null) {
        res.status(200).send({
          message: "Consulta realizada con éxito",
          data: search_manga.data,
          error: null,
        });
      } else if (search_manga.error == null && search_manga.data == null) {
        res.status(200).send({
          message: "No existe un manga con este título",
          data: null,
        });
      } else {
        res.status(500).send({
          message: "No se pudo realizar la búsqueda del manga",
          data: null,
          error: search_manga.error,
        });
      }
    } else {
      res.status(400).send({
        message: "Se requiere título para buscar el manga",
        data: null,
      });
    }
  } catch (error) {
    console.log("Error al buscar manga: ", error);
    res.status(500).send({
      message: "Error al procesar la solicitud de consultar un manga",
      data: null,
      error: error,
    });
  }
}

const path = require('path');
const pdfPath = path.join(__dirname, '../public/pdfs/test.pdf');

// Controlador para iterar sobre cada página de un PDF local
// Controlador para iterar sobre cada página de un PDF local
async function iterateOverPDF(req, res) {
  try {
    const pdfBytes = await readFile(pdfPath);
    const pdfDoc = await PDFDocument.load(pdfBytes);

    const totalPages = pdfDoc.getPageCount();
    const pagesData = [];

    for (let pageNumber = 1; pageNumber <= totalPages; pageNumber++) {
      const page = pdfDoc.getPage(pageNumber);
      const textContent = await page.getText();  // Utilizamos getText en lugar de getTextContent
      
      pagesData.push({
        pageNumber,
        textContent,
      });
    }

    res.status(200).send({
      message: "Iteración sobre cada página del PDF realizada con éxito",
      data: {
        totalPages,
        pagesData,
      },
      error: null,
    });
  } catch (error) {
    console.log("Error al iterar sobre el PDF: ", error);
    res.status(500).send({
      message: "Error al procesar la solicitud de iterar sobre el PDF",
      data: null,
      error: error,
    });
  }
}




// Esta función te ayudará a leer el contenido del archivo PDF
function readFile(filePath) {
  const fs = require("fs").promises;
  return fs.readFile(filePath);
}

async function findAllMangas(req, res) {
  try {
    let title = req.body.title;

    if (title) {
      let query = { title: title };
      let query_fields = "_id, title, author, otherFields"; // Ajusta los campos que deseas recuperar

      // Puedes ajustar el número de página y el límite según tus necesidades
      let page = parseInt(req.query.page) || 1;
      let limit = parseInt(req.query.limit) || 10;

      let search_mangas = await findLeanPaginate(
        "mangas",
        query,
        query_fields,
        page,
        limit
      );

      if (search_mangas.error == null) {
        res.status(200).send({
          message: "Consulta realizada con éxito",
          data: search_mangas.data,
          error: null,
        });
      } else {
        res.status(500).send({
          message: "No se pudo realizar la búsqueda de mangas",
          data: null,
          error: search_mangas.error,
        });
      }
    } else {
      res.status(400).send({
        message: "Se requiere título para buscar mangas",
        data: null,
      });
    }
  } catch (error) {
    console.log("Error al buscar mangas: ", error);
    res.status(500).send({
      message: "Error al procesar la solicitud de consultar mangas",
      data: null,
      error: error,
    });
  }
}

module.exports = {
  render: {},
  get: {
    findManga,
    getMangaByID,
    iterateOverPDF,
    findAllMangas
  },
  post: {
    createManga,
    updateManga,
    deleteManga,
  },
};
