const router = require("express").Router();
const vehicleRoutes = require("./vehicleRoutes");
const ticketRoutes = require("./ticketRoutes");

router.use("/vehicle", vehicleRoutes);
router.use("/ticket", ticketRoutes);

module.exports = router;
