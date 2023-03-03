"use strict";
const { DataTypes } = require("sequelize");


module.exports = {
  up: async ({context: queryInterface}) => {
    await queryInterface.createTable("Dog_Temperament", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      DogId: {
        type: DataTypes.UUID,
        references: {
          model: "Dogs",
          key: "id",
        },
      },
      TemperamentId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Temperaments",
          key: "id",
        },
      },
    });
  },

  down: async({context: queryInterface}) => {
    await queryInterface.dropTable("Dogs_Temperaments");
  },
};
