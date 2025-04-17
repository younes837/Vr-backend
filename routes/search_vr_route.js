const sql = require("mssql");
const config = require("../config/dbConfig.js");
const express = require("express");
const router = express.Router();

router.get("/search_vr", (req, res) => {
  console.log("search vr");
});

module.exports = router;
