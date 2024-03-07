// HELPERS
const _ = require("lodash");
const models = require("../helpers/models");
const utils = require("../helpers/utils");

// SERVICES
const { userService } = require("../services/main/manager");

// REST FUNCTIONS

const createUser = async (req, res) => {
  try {
    // Obtén los datos necesarios para crear el nuevo usuario desde el cuerpo de la solicitud
    const userData = req.body;
    console.log(userData, "Data");
    email = userData.email;

    const verifyEmail = await models.find("user", { email: email });
    console.log(verifyEmail.data.length)
    const exitsemail = verifyEmail.data.length

    if (exitsemail !== 0) {
      res.status(409).send({
        message: "Este correo ya esta en la base de datos",
        error: null,
      });
    } else {
      // Llama a tu función de creación de documento para usuarios
      const createUserResult = await models.newDocument("user", userData);

      if (createUserResult.error === null) {
        res.status(201).send({
          message: "Usuario creado con éxito",
          data: createUserResult.data,
          error: null,
        });
      } else {
        res.status(500).send({
          message: "No pude crearse el usuario",
          data: null,
          error: createUserResult.error,
        });
      }
    }
  } catch (error) {
    console.log("Error al crear el usuario: ", error);
    res.status(500).send({
      message: "Error al procesar la solicitud de crear un usuario",
      data: null,
      error: error,
    });
  }
};

const findAllUser = async (req, res) => {
  try {
    // Llama a tu función de creación de documento para usuarios
    const getAllUsersResult = await models.findLeanPaginate("user");

    if (getAllUsersResult.error === null) {
      res.status(201).send({
        message: "Usuarios encontrados con exito",
        data: getAllUsersResult.data,
        error: null,
      });
    } else {
      res.status(500).send({
        message: "Hubo un error en la busqueda de usuarios",
        data: null,
        error: getAllUsersResult.error,
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

const findUserById = async (req, res) => {
  try {
    const { userId } = req.params;
    console.log(userId)
    // Llama a tu función de creación de documento para usuarios
    const getUserByIdResult = await models.findById("user", userId);

    if (getUserByIdResult.error === null) {
      res.status(201).send({
        message: "Usuarios encontrados con exito",
        data: getUserByIdResult.data,
        error: null,
      });
    } else {
      res.status(500).send({
        message: "Hubo un error en la busqueda de usuarios",
        data: null,
        error: getUserByIdResult.error,
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
    findAllUser,
    findUserById
  },
  post: {
    createUser,
  },
};
