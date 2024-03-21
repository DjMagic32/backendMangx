// HELPERS
const _ = require("lodash");
const models = require("../helpers/models");
const utils = require("../helpers/utils");

// SERVICES
const {
  companyService,
} = require("../services/main/manager");


// REST FUNCTIONS

const createCompany = async (req, res) => {
  try {
    // Obtén los datos necesarios para crear la nueva empresa desde el cuerpo de la solicitud
    const companyData = req.body;
    const findUser = await models.findById("user", companyData?.user);

    if (findUser.data === null){
      return res.status(309).send({
        message: "Compañía no está vinculado a un usuario",
      });

    }
    // Llama a tu función de creación de documento para empresas
    const createCompanyResult = await models.newDocument('company', companyData);

    if (createCompanyResult.error === null) {
      res.status(201).send({
        message: "Empresa creada con éxito",
        data: createCompanyResult.data,
        error: null
      });
    } else {
      res.status(500).send({
        message: "No se pudo crear la empresa",
        data: null,
        error: createCompanyResult.error
      });
    }
  } catch (error) {
    console.log('Error al crear la empresa: ', error);
    res.status(500).send({
      message: "Error al procesar la solicitud de crear una empresa",
      data: null,
      error: error
    });
  }
};

// Buscar todas las compañías:
const findAllCompany = async (req, res) => {
  try {
    const getAllCompanyResult = await models.findLeanPaginate("company");

    if (getAllCompanyResult.error === null) {
      res.status(201).send({
        message: "Compañías encontradas con éxito",
        data: getAllCompanyResult.data,
        error: null,
      });
    } else {
      res.status(500).send({
        message: "Error al encontrar compañías",
        data: null,
        error: getAllCompanyResult.error,
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

// Busca compaía por ID.
const findCompanyById = async (req, res) => {
  try {
    const { companyId } = req.params;
    console.log(companyId)
    // Llama a tu función para buscar por ID.
    const getCompanyByIdResult = await models.findById("company", companyId);

    if (getCompanyByIdResult.error === null) {
      res.status(201).send({
        message: "Compañía encontrada con exito.",
        data: getCompanyByIdResult.data,
        error: null,
      });
    } else {
      res.status(500).send({
        message: "Hubo un error en la busqueda de la compañía.",
        data: null,
        error: getCompanyByIdResult.error,
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

// Actaulizar datos de compañías.
const updateCompany = async (req, res) => {
  try {
    const { companyId } = req.params;
    const updateData = req.body;

    const updateCompanyResult = await models.findByIdAndUpdate('company', companyId, updateData, { new: true });

    if (updateCompanyResult.error === null) {
      res.status(200).send({
        message: "Compañía actualizada con éxito",
        data: updateCompanyResult.data,
        error: null
      });
    } else {
      res.status(500).send({
        message: "Imposible actualizar compañía.",
        data: null,
        error: updateCompanyResult.error
      });
    }
  } catch (error) {
    console.log('Error al actualizar la compañía: ', error);
    res.status(500).send({
      message: "Error al procesar la solicitud.",
      data: null,
      error: error
    });
  }
};

// Eliminar una compañía.
const removeCompany = async (req, res) => {
  try {
    const { companyId } = req.params;

    const updateCompanyResult = await models.remove('company', { _id : companyId });

    if (updateCompanyResult.error === null) {
      res.status(200).send({
        message: "Compañía eliminada con éxito",
        data: updateCompanyResult.data,
        error: null
      });
    } else {
      res.status(500).send({
        message: "Imposible actualizar compañía.",
        data: null,
        error: updateCompanyResult.error
      });
    }
  } catch (error) {
    console.log('Error al actualizar la compañía: ', error);
    res.status(500).send({
      message: "Error al procesar la solicitud.",
      data: null,
      error: error
    });
  }
};


module.exports = {
  render: {
  },
  get: {
    findCompanyById,
    findAllCompany
  },
  post: {
    createCompany
  },
  put: {
    updateCompany
  },
  delete: {
    removeCompany
  }
};
