const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Repairs extends Model {}

Repairs.init(
  {
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
    cost: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    date: {
      type: DataTypes.DATE,
      // PRESET WITH TODAY'S DATE
      defaultValue: sequelize.fn('now'),
      allowNull: true,
    },
    mileage: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        max: 1000000,
      },
    },
    repair_method: {
        type: DataTypes.STRING,
        allowNull: true,
      },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'repairs',
  }
);

module.exports = Repairs;
