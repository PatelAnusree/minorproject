const express = require("express");
const router = express.Router();
const Marker = require("../models/marker");

router.post("/add-marker", async (req, res) => {
  const marker = await Marker.create(req.body);
  res.json(marker);
});

router.get("/:eventId", async (req, res) => {
  const markers = await Marker.find({
    eventId: req.params.eventId
  });
  res.json(markers);
});

module.exports = router;
