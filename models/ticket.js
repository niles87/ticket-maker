const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Ticket extends Model {}

Ticket.init(
  {
    vehicleId: {
      type: DataTypes.INTEGER,
      references: {
        model: "vehicle",
        key: "id",
      },
    },
  },
  {
    sequelize,
  }
);

module.exports = Ticket;
