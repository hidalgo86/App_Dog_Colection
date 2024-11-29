"use strict";

const axios = require("axios");
const { Dog, Temperament, Dog_Temperament } = require("../models/index").models;

//Controladores de las rutas dogs
const controller = {
  //Metodo para buscar todos los perros en db y api externa:
  dogAll: async (req, res) => {
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
      console.log(error);
      res.send({ error: error.message });
    }
  },

  //Metodo para buscar todos los perros en api externa:
  dogApi: async (req, res) => {
    try {
      let get_dogs_api = await get_dogs_api_externa();
      res.status(200).send(get_dogs_api);
    } catch (error) {
      console.log(error);
      res.send({ error: error.message });
    }
  },

  //Metodo para buscar todos los perros en db:
  dogDb: async (req, res) => {
    try {
      let get_dogs_db = await get_dogs_db_postgres(Dog);
      res.status(200).send(get_dogs_db);
    } catch (error) {
      console.log(error);
      res.send({ error: error.message });
    }
  },

  // Metodo para Crear perro:
  dogCreate: async (req, res) => {
    try {
      let { name, height, weight, lifeSpan, temperament, url } = req.body;

      let dog = await Dog.create({
        name,
        height,
        weight,
        lifeSpan,
        image: url,
      });
      await dog.addTemperaments(temperament);

      res.status(200).json({ message: "Dog creado con éxito" });
    } catch (error) {
      console.log(error);
      res.send({ error: error.message });
    }
  },

  //Metodo para Actualizar perro:
  dogUpdate: async (req, res) => {
    try {
      let { id } = req.params;
      let { name, height, weight, lifeSpan, temperament } = req.body;

      await Dog.update(
        {
          name,
          height,
          weight,
          lifeSpan,
        },
        {
          where: {
            id,
          },
        }
      );

      await Dog_Temperament.destroy({ where: { DogId: id } });

      let dog = await Dog.findByPk(id);

      await dog.addTemperaments(temperament);

      res.status(200).json({ message: "Dog actualizado con éxito" });
    } catch (error) {
      console.log(error);
      res.send({ error: error.message });
    }
  },

  //Metodo para eliminar perro:
  dogDelete: async (req, res) => {
    try {
      let { id } = req.params;
      await Dog_Temperament.destroy({ where: { DogId: id } });
      await Dog.destroy({ where: { id } });
      res.status(200).json({ message: "Dog eliminado con éxito" });
    } catch (error) {
      console.log(error);
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
      image: `https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`,
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

  let data = dataDb.map((dog) => {
    let dog_json = dog.toJSON();
    return {
      ...dog_json,
      Temperaments: "",
      temperament: dog_json.Temperaments?.map((item) => item.name),
    };
  });

  return data;
}

module.exports = controller;
