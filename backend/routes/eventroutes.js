const express = require("express");
const router = express.Router();

const Event = require("../models/event");

// CREATE EVENT (organiser adds event)
router.post("/create-event", async (req, res) => {
  try {
    const event = await Event.create(req.body);
    res.json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET ALL EVENTS (user sees events list)
router.get("/", async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
