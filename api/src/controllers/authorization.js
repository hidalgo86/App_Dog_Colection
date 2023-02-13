"use strict";

const jwt = require("jsonwebtoken");
const { User } = require("../models/index").models;

function generateAccessToken(usuario) {
  return jwt.sign(usuario, process.env.SECRET, { expiresIn: "5m" });
}

//Metodo para listar los usuarios:
async function auth(req, res) {
  try {
    const { username, password } = req.body;

    let query = await User.findOne({ where: { name: username } });

    let user = query.dataValues;

    if (!user) {
      return res.send({ mensaje: "Usuario no registrado" });
    }

    if (user.password !== String(password)) {
      return res.send({ mensaje: "Password incorrecto" });
    }

    const accessToken = generateAccessToken(user);

    res.header("authorization", accessToken).json({
      message: "Usuario autenticado",
      token: accessToken
    });

  } catch (error) {
    console.log(error);
    res.send({ menssage: error.menssage });
  }
}

module.exports = auth;
