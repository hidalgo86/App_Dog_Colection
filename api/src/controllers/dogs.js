"use strict";

const axios = require("axios");
const { Dog, Temperament } = require("../db.js");

//Controladores de las rutas dogs
const controller = {
  //Metodo para buscar todos los perros en db y api externa:
  dogsAll: async (req, res) => {
    try {
      let { name } = req.query;
      let get_dogs_api = await get_dogs_api_externa();
      let get_dogs_db = await get_dogs_db_postgres(Dog);
      let dogs = [...get_dogs_api, ...get_dogs_db];

      if (name) {
        let dogsName = dogs.filter((dog) =>
          dog.name.toLowerCase().includes(name.toLowerCase())
        );
        dogs = dogsName;
      }

      res.status(200).send(dogs);
    } catch (error) {
      res.send({ error: error.message });
    }
  },

  //Metodo para buscar todos los perros en api externa:
  dogsApi: async (req, res) => {
    try {
      let get_dogs_api = await get_dogs_api_externa();
      res.status(200).send(get_dogs_api);
    } catch (error) {
      res.send({ error: error.message });
    }
  },

  //Metodo para buscar todos los perros en db:
  dogsDb: async (req, res) => {
    try {
      let get_dogs_db = await get_dogs_db_postgres(Dog);
      res.status(200).send(get_dogs_db);
    } catch (error) {
      res.send({ error: error.message });
    }
  },

  //Metodo para Crear perro:
  dogCreate: async (req, res) => {
    try {
      let { name, height, weight, lifeSpan, temperament } = req.body;

      let dog = await Dog.create({
        name,
        height,
        weight,
        lifeSpan,
      });
      await dog.addTemperaments(temperament);

      res.status(200).json({mensaje: "Creado con éxito"});
    } catch (error) {
      res.send({ error: error.message });
    }
  },

  //Metodo para Actualizar perro:
  dogUpdate: async (req, res) => {
    try {
      let { id } = req.params;
      let { name, height, weight, lifeSpan, temperament } = req.body;

      let dog = await Dog.findOne({id});

      dog.update({
        name,
        height,
        weight,
        lifeSpan,
      });
    
      res.status(200).json({mensaje: "Actualizado con éxito"});
    } catch (error) {
      res.send({ error: error.message });
    }
  },

  //Metodo para eliminar perro:
  dogDelete: async (req, res) => {
    try {
      let { id } = req.params;
      await Dog.destroy({ where: { id } });
      res.status(200).json({ mensaje: "Eliminado con éxito" });
    } catch (error) {
      res.send({ error: error.message });
    }
  },
};

//Funcion para importar los perros de la API externa:
async function get_dogs_api_externa() {
  let api = await axios.get(`https://api.thedogapi.com/v1/breeds`);

  let dogs = api.data.map((dog) => {
    function weight_min_max(weight_stringth) {
      if (!weight_stringth) return [0];
      const weight_array_min_max = weight_stringth.split("-").map((value) => {
        value.trim();
        return value === "NaN" ? 0 : Number(value);
      });
      return weight_array_min_max;
    }

    const weight = weight_min_max(dog.weight.metric);
    const weightMin = weight[0];
    const weightMax = weight[1] ? weight[1] : weight[0];
    const temperament = dog.temperament ? dog.temperament.split(", ") : [];

    return {
      id: dog.id,
      name: dog.name,
      height: dog.height.metric,
      weight: dog.weight.metric,
      weightMin,
      weightMax,
      lifeSpan: dog.life_span,
      temperament,
      image: dog.image.url,
    };
  });

  return dogs;
}

//Funcion para importar los perros de la DB:
async function get_dogs_db_postgres(Dog) {
  let dataDb = await Dog.findAll({
    include: [
      {
        model: Temperament,
        through: { attributes: [] },
        attributes: ["name"],
      },
    ],
  });
  return dataDb;
}

module.exports = controller;
