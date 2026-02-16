const cors = require("cors");

const express = require("express");
const connectDB = require("./config/db");

const app = express();

app.use(express.json());

connectDB();

app.listen(5000, () => {
  console.log("Server running");
});
app.use(cors());

app.use("/api/markers", require("./routes/markerroutes"));
app.use("/api/events", require("./routes/eventroutes"));

