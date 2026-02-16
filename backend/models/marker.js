const mongoose = require("mongoose");

const markerSchema = new mongoose.Schema({
  eventId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event"
  },

  name: String,      // Stall Name
  type: String,      // stall / stage / washroom

  x: Number,         // position on image
  y: Number
});

module.exports = mongoose.model("Marker", markerSchema);
