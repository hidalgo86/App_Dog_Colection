"use strict";

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      // validate: {
      //   isAlpha: true,
      // }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      // validate: {
      //   isAlpha: true,
      // }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }
  );

  return User;
};
