// Controlador de transportista.
const _ = require("lodash");
const models = require("../helpers/models");
const utils = require("../helpers/utils");

// Serivicio:
const { ridersService } = require("../services/main/manager");

// Funciones REST

const createEntrepreneurship = async (req, res) => {
  try {
    // Obtén los datos necesarios para crear el nuevo transportista.
    const entrepreneurshipData = req.body;
    if (!entrepreneurshipData.user || entrepreneurshipData.user == "") {
      return  res.status(309).send({
        message: "Emprendimiento no esta viculado a un usuario",
      });
    }

    // Llama a tu función de creación de documento para transportistas.
    const createEntrepreneurship = await models.newDocument(
      "entrepreneurship",
      entrepreneurshipData
    );

    if (createEntrepreneurship.error === null) {
      res.status(201).send({
        message: "Emprendimiento creado con éxito",
        data: createEntrepreneurship.data,
        error: null,
      });
    } else {
      res.status(500).send({
        message: "No pudo crearse el Emprendimiento.",
        data: null,
        error: createEntrepreneurship.error,
      });
    }
  } catch (error) {
    console.log("Imposible al crear el Emprendimiento: ", error);
    res.status(500).send({
      message: "Error al procesar la solicitud.",
      data: null,
      error: error,
    });
  }
};

const findAllEntrepreneurships = async (req, res) => {
  try {
    const getAllentrepreneurships = await models.findLeanPaginate(
      "entrepreneurship"
    );

    if (getAllentrepreneurships.error === null) {
      res.status(201).send({
        message: "Emprendimientos encontrados con éxito",
        data: getAllentrepreneurships.data,
        error: null,
      });
    } else {
      res.status(500).send({
        message: "Hubo un error en la busqueda de Emprendimientos",
        data: null,
        error: getAllentrepreneurships.error,
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

const findEntrepreneurshipById = async (req, res) => {
  try {
    const { entrepreneurshipId } = req.params;
    console.log(entrepreneurshipId);
    // Llama a tu función para buscar por ID.
    const getEntrepreneurshipById = await models.findById(
      "entrepreneurship",
      entrepreneurshipId
    );

    if (getEntrepreneurshipById.error === null) {
      res.status(201).send({
        message: "Emprendimiento encontrados con exito.",
        data: getEntrepreneurshipById.data,
        error: null,
      });
    } else {
      res.status(500).send({
        message: "Hubo un error en la busqueda del emprendimiento.",
        data: null,
        error: getEntrepreneurshipById.error,
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

const updateEntrepreneurship = async (req, res) => {
  try {
    const { entrepreneurshipId } = req.params;
    const updateData = req.body;

    const updateEntrepreneurship = await models.findByIdAndUpdate(
      "entrepreneurship",
      entrepreneurshipId,
      updateData
    );

    if (updateEntrepreneurship.error === null) {
      res.status(200).send({
        message: "Emprendimiento actualizado con éxito",
        data: updateEntrepreneurship.data,
        error: null,
      });
    } else {
      res.status(500).send({
        message: "Imposible actualizar emprendimiento.",
        data: null,
        error: updateEntrepreneurship.error,
      });
    }
  } catch (error) {
    console.log("Error al actualizar el emprendimiento: ", error);
    res.status(500).send({
      message: "Error al procesar la solicitud.",
      data: null,
      error: error,
    });
  }
};

const removeEntrepreneurship = async (req, res) => {
  try {
    const { entrepreneurshipId } = req.params;
    const deleteEntrepreneurship = await models.remove("entrepreneurship", { _id : entrepreneurshipId });

    if (deleteEntrepreneurship.error === null) {
      res.status(200).send({
        message: "Emprendimiento borardo con éxito",
        data: deleteEntrepreneurship.data,
        error: null,
      });
    } else {
      res.status(500).send({
        message: "No fue posible borrar emprendimiento.",
        data: null,
        error: deleteEntrepreneurship.error,
      });
    }
  } catch (error) {
    console.log("Error al borrar el emprendimiento: ", error);
    res.status(500).send({
      message: "Error al procesar la solicitud.",
      data: null,
      error: error,
    });
  }
};

module.exports = {
  render: {},
  get: {
    findAllEntrepreneurships,
    findEntrepreneurshipById,
  },
  post: {
    createEntrepreneurship,
  },
  put: {
    updateEntrepreneurship,
  },
  delete: {
    removeEntrepreneurship,
  },
};
