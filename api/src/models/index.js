"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const process = require("process");
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../database/config/config.json")[env];
const db = {};

// Configuracion de conexion a postgres:
let sequelize;
console.log(process.env.NODE_ENV)
console.log(config)
console.log(process.env.DATABASE_URL)
// if (config.use_env_variable) {
if (process.env.NODE_ENV==="production") {
  // sequelize = new Sequelize(config);
  new Sequelize(process.env.DATABASE_URL, {
    dialect: "postgres",
    pool: {
      max: 3,
      min: 1,
      idle: 10000,
    },
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
      keepAlive: true,
    },
    ssl: true,
  })
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}


// let sequelize = new Sequelize(`postgres://postgres:postgres@localhost:5432/dogs`, {
//         logging: false,
//         native: false,
//       });

//Lecturas de los archivos en la carpeta models:
fs.readdirSync(__dirname) //Leer los archivos
  .filter((file) => {
    //filtrar:
    return (
      file.indexOf(".") !== 0 && //No incluir los que inicien en (.)
      file !== basename && //No incluir el archivo donde se esta corriendo (index.js)
      file.slice(-3) === ".js" && //Incluir los archivos que terminen en (.js)
      file.indexOf(".test.js") === -1 // No incluir los archivos ('.test.js')
    );
  })
  .forEach((file) => {
    //Importar los archivos modelos y ejecutarlos pasandole los argumentos:
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    //Cada modelo que hay en directorio lo vinculamos a nuestro objeto db:
    db[model.name] = model;
  });

//Realiza las asociasiones de los modelos
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

module.exports = {sequelize, models:sequelize.models};
