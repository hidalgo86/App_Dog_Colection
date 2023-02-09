'use strict'

const axios = require("axios")
const { Temperament } = require("../db.js");

async function temperament(req, res) {
  try {
    //Buscar los temperamentos en la base de datos:
    let temperamentsAll = await Temperament.findAll();

    if (temperamentsAll.length !== 0) {
      res.status(200).json(temperamentsAll);
    } else {

      //Buscar los temperaments en la api externa:
      temperamentsAll = await getApi();

      //Guarda los temperaments en la base de datos:
      temperamentsAll.forEach((temperament) => {
        Temperament.findOrCreate({
          where: { name: temperament },
        });
      });

      //Buscar los temperamentos en la base de datos:
      temperamentsAll = await Temperament.findAll();

      res.status(200).json(temperamentsAll);
    }
  } catch (error) {
    res.send({error: error.message});
  }
}


async function getApi () {
    try {
      //Buscar todos los temperamentos en la api externa
      let temperamentsApi = await axios.get(
        `https://api.thedogapi.com/v1/breeds`
      );
  
      //filtrar los temperamentos de cada raza de perro:
      let temperaments = temperamentsApi.data.map((item) =>
        item.temperament ? item.temperament.split(", ") : []
      );
  
      //crear un array de temperamentos general:
      let arrayPlano = temperaments.flat(Infinity)
      let mySet = new Set(arrayPlano)
      let arrayOrdenado = Array.from(mySet).sort()

      return arrayOrdenado

    } catch (error) {
      return error.message;
    }
  };

module.exports = temperament;
