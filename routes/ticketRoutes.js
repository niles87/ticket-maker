const router = require("express").Router();
const { Ticket, Vehicle } = require("../models");

router.get("/", async (req, res) => {
  try {
    const allTickets = await Ticket.findAll({
      include: Vehicle,
    });
    res.json(allTickets);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

router.post("/", async (req, res) => {
  try {
    const ticket = await Ticket.create(req.body);
    res.json(ticket);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

module.exports = router;
