"use strict";
const { DataTypes } = require("sequelize");


module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable("Temperaments", {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  },

  down: async(queryInterface) => {
    await queryInterface.dropTable("Temperaments");
  },
};
