"use strict";
const { DataTypes } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
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

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Dogs_Temperaments");
  },
};
