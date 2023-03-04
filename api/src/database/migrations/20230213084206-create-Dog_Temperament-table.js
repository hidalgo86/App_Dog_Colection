"use strict";
const { DataTypes } = require("sequelize");


module.exports = {
  up: async (queryInterface) => {
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

  down: async(queryInterface) => {
    await queryInterface.dropTable("Dog_Temperament");
  },
};
