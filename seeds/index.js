const seedVehicles = require("./vehicle-seeds");
const seedTickets = require("./ticket-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  console.log("\n----- DATABASE SYNCED -----\n");
  await seedVehicles();
  console.log("\n----- VEHICLES SEEDED -----\n");

  await seedTickets();
  console.log("\n----- TICKETS SEEDED -----\n");

  process.exit(0);
};

seedAll();
