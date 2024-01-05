const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Vehicles extends Model {}

Vehicles.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1900,
        min: 3000,
      },
    },
    make: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlphanumeric: true,
      },
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    trim: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    vin: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isAlphanumeric: true,
      },
    },
    color: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },
    tire_size: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    engine_size: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'vehicles',
  }
);

module.exports = Vehicles;
