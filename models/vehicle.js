const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Vehicle extends Model {}

Vehicle.init(
  {
    driverName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    licensePlate: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [7, 10],
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "vehicle",
  }
);

module.exports = Vehicle;
