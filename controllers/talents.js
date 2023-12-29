// PACKAGES



// HELPERS
const _ = require("lodash");
const models = require("../helpers/models");
const utils = require("../helpers/utils");


// SERVICES
const {
  talentsService,
} = require("../services/main/manager");


// REST FUNCTIONS

async function talent(req, res) {
  try {
    let email = req.user.email;

    if (email) {
      let query = { email: email };
      let search_email = await models.findLean('talents', query, null, {}, 0);

      if (search_email.error == null && search_email.data.length > 0) {
        res.status(200).send({
          message: "Consulta realizada con éxito",
          data: search_email.data[0],
          error: null
        });
      } else if (search_email.error == null && search_email.data.length == 0) {
        res.status(200).send({
          message: "No existe un talento con este email",
          data: null
        });
      } else {
        res.status(500).send({
          message: "No se pudo realizar la busqueda del talento",
          data: null,
          error: search_email.error
        });
      }
    } else {
      res.status(400).send({
        message: "Se requiere email para buscar el talento",
        data: null
      });
    }


  } catch (error) {
    console.log('Errete talent: ', error);
    res.status(500).send({
      message: "Error al procesar la solicitud de consultar un talento",
      data: null,
      error: error
    });
  }
}

async function getAllTalents(req, res) {
  await talentsService.find({}).then(async (talent_result) => {
    if (talent_result.body != null) {
      console.log(talent_result.body);
      utils.resultResponse("get-all", talent_result.body, res, 200);
    } else {
      console.log("No hay talentos u ocurrió un error");
      utils.resultResponse("error", "No hay talentos u ocurrió un error", res, 500);
    }
  }).catch((talent_error) => {
    console.log(talent_error);
    utils.resultResponse("error", talent_error, res, 500);
  });
}

module.exports = {
  render: {
  },
  get: {
    getAllTalents,
    talent,
  },
  post: {
  
  },
};
