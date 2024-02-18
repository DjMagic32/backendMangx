// HELPERS
const _ = require("lodash");
const models = require("../helpers/models");
const utils = require("../helpers/utils");

// SERVICES
const {
  findCompanyService,
} = require("../services/main/manager");


// REST FUNCTIONS

const findCompany = async (req, res) => {
  try {
    // Obtén los datos necesarios para crear la nueva empresa desde el cuerpo de la solicitud
    const companyData = req.body;

    // Llama a tu función de creación de documento para empresas
    const findCompanyResult = await models.findOne('findCompany', companyData); // Actualización antes del push: cambiado "findById" por "findOne".

    if (createCompanyResult.error === null) {
      res.status(201).send({
        message: "Empresa creada con éxito", // Pendiente por editar.
        data: findCompanyResult.data,
        error: null
      });
    } else {
      res.status(500).send({
        message: "No se pudo crear la empresa", // Pendiente por editar.
        data: null,
        error: findCompanyResult.error
      });
    }
  } catch (error) {
    console.log('Error al crear la empresa: ', error);
    res.status(500).send({
      message: "Error al procesar la solicitud de crear una empresa", // Pendiente por editar.
      data: null,
      error: error
    });
  }
};


module.exports = {
  render: {
  },
  get: {
    findCompany
  },
  post: {
    
  },
};
