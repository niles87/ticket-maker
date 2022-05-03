const Vehicle = require("./vehicle");
const Ticket = require("./ticket");

Ticket.belongsTo(Vehicle, {
  foreignKey: "vehicleId",
  onDelete: "CASCADE",
});

module.exports = {
  Vehicle,
  Ticket,
};
