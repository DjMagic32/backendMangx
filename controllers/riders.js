// Controlador de transportista.
const _ = require("lodash");
const models = require("../helpers/models");
const utils = require("../helpers/utils");

// Serivicio:
const { ridersService } = require("../services/main/manager");


// Funciones REST

// Verificación y creación de transportista:
const createRiders = async (req, res) => {
  try {
    const ridersData = req.body;

    // Verificar si el transportista ya existe
    const transportistaExistente = await models.find('riders', { user: ridersData.user });
    if (transportistaExistente) {
      return res.status(400).send({
        message: "El transportista ya existe.",
        data: null,
        error: "Ya existe un transportista con el mismo usuario."
      });
    }

    // Crea una constante para crear un nuevo transportista.
    const createRidersResult = await models.newDocument('riders', ridersData);
    // Abajo procede a crear el transportista debido a que no hay transportista duplicado.
    if (createRidersResult.error === null) {
      res.status(201).send({
        message: "Transportista creado con éxito.",
        data: createRidersResult.data,
        error: null
      });
    } else {
      res.status(500).send({
        message: "No pudo crearse el transportista.",
        data: null,
        error: createRidersResult.error
      });
    }
  } catch (error) {
    console.log('Imposible crear el transportista: ', error);
    res.status(500).send({
      message: "Error al procesar la solicitud.",
      data: null,
      error: error
    });
  }
};

// Buscar todos los transportistas:
const findAllRiders = async (req, res) => {
  try {
    const getAllRidersResult = await models.findLeanPaginate("riders");

    if (getAllRidersResult.error === null) {
      res.status(201).send({
        message: "Transportistas encontrados con éxito",
        data: getAllRidersResult.data,
        error: null,
      });
    } else {
      res.status(500).send({
        message: "Hubo un error en la busqueda de transportistas",
        data: null,
        error: getAllRidersResult.error,
      });
    }
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).send({
      message: "Error al procesar la solicitud",
      data: null,
      error: error,
    });
  }
};



module.exports = {
  render: {},
  get: {
    findAllRiders,
  },
  post: {
    createRiders
  },
};