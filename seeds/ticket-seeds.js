const { Ticket } = require("../models");

const tickets = [
  {
    vehicleId: 4,
  },
  {
    vehicleId: 2,
  },
  {
    vehicleId: 3,
  },
  {
    vehicleId: 1,
  },
];

const seedTickets = () => Ticket.bulkCreate(tickets);

module.exports = seedTickets;
