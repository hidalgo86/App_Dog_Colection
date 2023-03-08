"use strict";
const { DataTypes } = require("sequelize");

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable("Dogs", {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          is: /^[a-z]+$/i,
        },
      },
      height: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      weight: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lifeSpan: {
        type: DataTypes.STRING,
      },
      image: {
        type: DataTypes.STRING,
      },
    });
  },

  down: async(queryInterface) => {
    await queryInterface.dropTable("Dogs");
  },
};
