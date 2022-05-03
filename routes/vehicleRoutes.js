const router = require("express").Router();
const { Vehicle } = require("../models");

router.get("/", async (req, res) => {
  try {
    const vehicles = await Vehicle.findAll();
    res.json(vehicles);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

// create Vehicle
router.post("/", async (req, res) => {
  try {
    const vehicleData = await Vehicle.create(req.body);
    res.status(200).json(vehicleData);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedVehicle = await Vehicle.update(req.body, {
      where: req.params,
    });
    if (!updatedVehicle[0]) {
      return res.status(404).json({ message: "vehicle not found" });
    }
    res.json(updatedVehicle);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const vehicle = await Vehicle.destroy({
      where: req.params,
    });
    if (!vehicle) {
      return res.status(404).json({ message: "vehicle not found" });
    }
    res.json(vehicle);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

module.exports = router;
