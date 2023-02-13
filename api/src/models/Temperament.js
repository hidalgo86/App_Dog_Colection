"use strict";

module.exports = (sequelize, DataTypes) => {
  const Temperament = sequelize.define(
    "Temperament",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );

  Temperament.associate = function (models) {
    models.Temperament.belongsToMany(models.Dog, {
      through: "Dog_Temperament",
    });
  };


  return Temperament;
};
