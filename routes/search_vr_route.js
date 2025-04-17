const sql = require("mssql");
const config = require("../config/dbConfig.js");
const express = require("express");
const router = express.Router();

router.get("/search_vr", async (req, res) => {
  const { search } = req.query;
  const pool = await sql.connect(config);
  let condition = "";
  if (search && search != "") {
    condition = `and fth5ky like '%${search}%'`;
  }
  const result = await pool
    .request()
    .query(
      `SELECT fth5ky as code_vr, fth5actif as active ,fth5MODIF as modifiable FROM FTH5AXEVAL where fth5ky like 'F08%' ${condition}`
    );
  res.json(result.recordsets[0]);
});

router.get("/search_vr_detail", async (req, res) => {
  const { code_vr } = req.query;
  const pool = await sql.connect(config);
  const result = await pool
    .request()
    .query(
      `SELECT f11vplaqt AS KMS, F11VQT as NB ,F11VMTU as VR FROM F11VTARIF where K11VTH5AXE1 like '%${code_vr}%'`
    );
  res.json(result.recordsets[0]);
});

module.exports = router;
