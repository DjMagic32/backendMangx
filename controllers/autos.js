const _ = require("lodash");
const models = require("../helpers/models");
const utils = require("../helpers/utils");

// SERVICES
const {
  autoServices,
} = require("../services/main/manager");


// REST FUNCTIONS

const createAuto = async (req, res) => {
  try {
    // Obtén los datos necesarios para crear el auto desde el cuerpo de la solicitud
    const autoData = req.body;

    // Llama a tu función de creación de documento para autos
    const createAutoResult = await models.newDocument('autos', autoData);

    if (createAutoResult.error === null) {
      res.status(201).send({
        message: "Auto generado con éxito",
        data: createAutoResult.data,
        error: null
      });
    } else {
      res.status(500).send({
        message: "No se pudo registrar auto",
        data: null,
        error: createAutoResult.error
      });
    }
  } catch (error) {
    console.log('Error al registrar auto: ', error);
    res.status(500).send({
      message: "Error al procesar la solicitud de registrar auto",
      data: null,
      error: error
    });
  }
};


module.exports = {
  render: {
  },
  get: {

  },
  post: {
    createAuto
  },
};
