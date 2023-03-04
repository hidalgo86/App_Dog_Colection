'use strict';
const { DataTypes } = require("sequelize");

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        type: DataTypes.STRING
      },
      password: {
        type: DataTypes.STRING
      },
      email: {
        type: DataTypes.STRING
      }
    });
  },
  down: async(queryInterface) => {
    await queryInterface.dropTable('Users');
  }
};