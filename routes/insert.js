const sql = require("mssql");
const config = require("../config/dbConfig.js");
const express = require("express");
const router = express.Router();

router.get("/insert", (req, res) => {
  console.log("insert");
});

module.exports = router;
