"use strict";

const jwt = require("jsonwebtoken");
const { User } = require("../models/index").models;

function generateAccessToken(usuario) {
  return jwt.sign(usuario, process.env.SECRET, { expiresIn: "15m" });
}

//Metodo para listar los usuarios:
async function auth(req, res) {
  try {
    const { username, password } = req.body;

    if (!username || !password)
      return res.send({ message: "Datos incompletos" });

    let query = await User.findOne({ where: { name: username } });

    if (!query) {
      return res.send({ message: "Usuario no registrado" });
    }

    let user = query.dataValues;

    if (user.password !== String(password)) {
      return res.send({ message: "Password incorrecto" });
    }

    const accessToken = generateAccessToken(user);

    res.header("authorization", accessToken).json({
      message: "Usuario autenticado",
      token: accessToken,
    });
  } catch (error) {
    console.log(error);
    res.send({ menssage: error.menssage });
  }
}

module.exports = auth;
