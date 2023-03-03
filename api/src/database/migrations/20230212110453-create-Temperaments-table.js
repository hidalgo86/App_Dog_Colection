"use strict";
const { DataTypes } = require("sequelize");


module.exports = {
  up: async ({context: queryInterface}) => {
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

  down: async({context: queryInterface}) => {
    await queryInterface.dropTable("Temperaments");
  },
};
