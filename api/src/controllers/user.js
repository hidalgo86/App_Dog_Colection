"use strict";

const { User } = require("../models/index").models;

//Controladores de las rutas dogs
const controller = {
  //Metodo para buscar todos los perros en db y api externa:
  userAll: async (req, res) => {
    try {
      let user = await User.findAll();
      if (!user[0]) {
        return res.send({ menssage: "Usuarios no encontrado" });
      }
      res.send(user);
    } catch (error) {
      console.log(error);
      res.send({ error: error.message });
    }
  },

  //Metodo para Crear usuario:
  userCreate: async (req, res) => {
    try {
      let { name, password, email } = req.body;

      let user = await User.create({
        name,
        password,
        email,
      });
      res.json(user);
    } catch (error) {
      console.log(error);
      res.send({ error: error.message });
    }
  },

  //Metodo para Actualizar usuario:
  userUpdate: async (req, res) => {
    try {
      let { id } = req.params;
      let { name, password, email } = req.body;
      if ((!id, !name, !password, !email)) {
        return res.send({ menssage: "Faltan datos" });
      }
      let user = await User.findByPk(id);

      if (!user.dataValues) {
        return res.send({ menssage: "Usuario no encontrado" });
      }
      user.update({
        name,
        password,
        email,
      });
      res.status(200).json({ mensaje: "Usuario actualizado con éxito" });
    } catch (error) {
      console.log(error);
      res.send({ error: error.message });
    }
  },

  //Metodo para eliminar usuario:
  userDelete: async (req, res) => {
    try {
      let { id } = req.params;
      await User.destroy({ where: { id } });
      res.status(200).json({ mensaje: "Usuario eliminado con éxito" });
    } catch (error) {
      console.log(error);
      res.send({ error: error.message });
    }
  },
};

module.exports = controller;
