// Basic Express.js Application

// Import required modules
const express = require("express");
const path = require("path");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();
const PORT = process.env.PORT || 3005;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
require("dotenv").config();
const { connectToDatabase } = require("./config/dbConfig");
connectToDatabase();
const search_vr_route = require("./routes/search_vr_route");
const add_vr_code_route = require("./routes/add_vr_code_route");
const insert_route = require("./routes/insert");
app.use("/api", search_vr_route);
app.use("/api", add_vr_code_route);
app.use("/api", insert_route);

app.use((req, res) => {
  res.status(404).send("Page not found");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
