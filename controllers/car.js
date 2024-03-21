// HELPERS
const _ = require("lodash");
const models = require("../helpers/models");
const utils = require("../helpers/utils");

// SERVICES
const {
  carService,
} = require("../services/main/manager");


// REST FUNCTIONS

const createCar = async (req, res) => {
  try {
    // Obtén los datos necesarios para crear la nueva empresa desde el cuerpo de la solicitud
    const carData = req.body;


    // Verifica si el vehículo no está vinculado a alguien. 
    const findUser = await models.findById("user", carData?.user);

    if (findUser.data === null){
      return res.status(309).send({
        message: "Este vehículo no está vinculado a ningún usuario.",
      });

    }

    // // Verifica si existe matrícula duplicada. Si existe, retornará error; de lo contrario, continuará.
    // const findPlate = await models.findById("car", carData?.matricula);
    // if (!findPlate.data === null){
    //     return res.status(309).send({
    //         message: "Matrícula duplicada.",
    //       });
    // }


    // En caso de que el vehículo no esté vinculado a nadie, llama a la función de creación de documento coches
    const createCarResult = await models.newDocument('car', carData);

    if (createCarResult.error === null) {
      res.status(201).send({
        message: "Vehículo registrado con éxito",
        data: createCarResult.data,
        error: null
      });
    } else {
      res.status(500).send({
        message: "Imposible registrar el vehículo.",
        data: null,
        error: createCarResult.error
      });
    }
  } catch (error) {
    console.log('Error al crear el vehículo: ', error);
    res.status(500).send({
      message: "Error al procesar la solicitud.",
      data: null,
      error: error
    });
  }
};

// Buscar todos los vehículos:
const findAllCar = async (req, res) => {
  try {
    const getAllCarResult = await models.findLeanPaginate("car");

    if (getAllCarResult.error === null) {
      res.status(201).send({
        message: "Vehículos encontrados con éxito.",
        data: getAllCarResult.data,
        error: null,
      });
    } else {
      res.status(500).send({
        message: "Hubo un error al encontrar los vehículos.",
        data: null,
        error: getAllCarResult.error,
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

// Busca vehículo por ID.
const findCarById = async (req, res) => {
  try {
    const { carId } = req.params;
    console.log(carId)
    // Llama a tu función para buscar por ID.
    const getCarByIdResult = await models.findById("car", carId);

    if (getCarByIdResult.error === null) {
      res.status(201).send({
        message: "Vehículo encontrado con éxito.",
        data: getCarByIdResult.data,
        error: null,
      });
    } else {
      res.status(500).send({
        message: "Imposible encontrar vehículo.",
        data: null,
        error: getCarByIdResult.error,
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

// Actaulizar datos de vehiculo.
const updateCar = async (req, res) => {
  try {
    const { carId } = req.params;
    const updateData = req.body;

    const updateCarResult = await models.findByIdAndUpdate('car', carId, updateData, { new: true });

    if (updateCarResult.error === null) {
      res.status(200).send({
        message: "Actualizado con éxito.",
        data: updateCarResult.data,
        error: null
      });
    } else {
      res.status(500).send({
        message: "Imposible actualizar.",
        data: null,
        error: updateCarResult.error
      });
    }
  } catch (error) {
    console.log('Error al actualizar: ', error);
    res.status(500).send({
      message: "Error al procesar la solicitud.",
      data: null,
      error: error
    });
  }
};

// Eliminar un vehículo.
const removeCar = async (req, res) => {
  try {
    const { carId } = req.params;

    const updateCarResult = await models.remove('car', { _id : carId });

    if (updateCarResult.error === null) {
      res.status(200).send({
        message: "Vehículo eliminado con éxito",
        data: updateCarResult.data,
        error: null
      });
    } else {
      res.status(500).send({
        message: "Imposible borrar datos del vehículo.",
        data: null,
        error: updateCarResult.error
      });
    }
  } catch (error) {
    console.log('Error al intentar borrar vehículo: ', error);
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
    findCarById,
    findAllCar
  },
  post: {
    createCar
  },
  put: {
    updateCar
  },
  delete: {
    removeCar
  }
};