const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  name: String,
  category: String,
  description: String,

  city: String,
  venue: String,
  address: String,

  startDate: String,
  endDate: String,
  startTime: String,
  endTime: String,
  duration: String,

  coverImage: String,
  layoutImage: String,

  organiserName: String,

  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Event", eventSchema);
