const sql = require("mssql");
const config = require("../config/dbConfig.js");
const express = require("express");
const router = express.Router();

router.get("/add_vr_code", (req, res) => {
  console.log("add vr code");
});

module.exports = router;
