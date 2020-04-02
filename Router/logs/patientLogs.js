// patient logs managment
const express = require("express");
const router = express.Router();

const { addPateintlogs } = require("../../DB/logs/patientLogsDB");

router.post("/", async (req, res) => {
  const patientInfo = await addPateintlogs(req.body);
  res.status(patientInfo.status).send(patientInfo);
});

module.exports = router;
