const { Vehicle } = require("../models");

const vehicles = [
  {
    driverName: "Ash",
    licensePlate: "CATCHEM1",
  },
  {
    driverName: "Jake",
    licensePlate: "STFARM",
  },
  {
    driverName: "Misty",
    licensePlate: "WENLK903",
  },
  {
    driverName: "Lex",
    licensePlate: "WIV098JI",
  },
];

const seedVehicles = () => Vehicle.bulkCreate(vehicles);

module.exports = seedVehicles;
