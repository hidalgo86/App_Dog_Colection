"use strict";

module.exports = (sequelize, DataTypes) => {
  const Dog = sequelize.define(
    "Dog",
    {
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
    },
    {
      timestamps: false,
    }
  );

  Dog.associate = function (models) {
    models.Dog.belongsToMany(models.Temperament, {
      through: "Dog_Temperament",
    });
  };

  return Dog;
};
