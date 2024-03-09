// Controlador de transportista.
const _ = require("lodash");
const models = require("../helpers/models");
const utils = require("../helpers/utils");

// Serivicio:
const { ridersService } = require("../services/main/manager");


// Funciones REST

const createRiders = async (req, res) => {
  try {
    // Obtén los datos necesarios para crear el nuevo transportista.
    const ridersData = req.body;

    // Llama a tu función de creación de documento para transportistas.
    const createRidersResult = await models.newDocument('riders', ridersData);

    if (createRidersResult.error === null) {
      res.status(201).send({
        message: "Transportista creado con éxito",
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
    console.log('Imposible al crear el transportista: ', error);
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

// Busca los transportistas por ID.
const findRiderById = async (req, res) => {
  try {
    const { riderId } = req.params;
    console.log(riderId)
    // Llama a tu función para buscar por ID.
    const getRiderByIdResult = await models.findById("riders", riderId);

    if (getRiderByIdResult.error === null) {
      res.status(201).send({
        message: "Transportistas encontrados con exito.",
        data: getRiderByIdResult.data,
        error: null,
      });
    } else {
      res.status(500).send({
        message: "Hubo un error en la busqueda de transportistas.",
        data: null,
        error: getRiderByIdResult.error,
      });
    }
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).send({
      message: "Imposible al procesar la solicitud.",
      data: null,
      error: error,
    });
  }
};

// Actualizar datos específicos de un transportista.
const updateRider = async (req, res) => {
  try {
    const { riderId } = req.params;
    const updateData = req.body;

    const updateRiderResult = await models.findByIdAndUpdate('riders', riderId, updateData, { new: true });

    if (updateRiderResult.error === null) {
      res.status(200).send({
        message: "Transportista actualizado con éxito",
        data: updateRiderResult.data,
        error: null
      });
    } else {
      res.status(500).send({
        message: "Imposible actualizar transportista.",
        data: null,
        error: updateRiderResult.error
      });
    }
  } catch (error) {
    console.log('Error al actualizar el transportista: ', error);
    res.status(500).send({
      message: "Error al procesar la solicitud.",
      data: null,
      error: error
    });
  }
};



module.exports = {
  render: {},
  get: {
    findAllRiders,
    findRiderById
  },
  post: {
    createRiders
  },
  put: {
    updateRider
  },
};