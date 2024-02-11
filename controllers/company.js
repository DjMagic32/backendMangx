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


module.exports = {
  render: {
  },
  get: {

  },
  post: {
    createCompany
  },
};
