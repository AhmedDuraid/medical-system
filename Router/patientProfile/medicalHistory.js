// medical history managment
const express = require("express");
const router = express.Router();

// GET one THE medical history
// @GET /api/medical_history/:patient_id
router.get("/:patient_id", (req, res) => {
  res.send(` the med is ${req.params.patient_id}`);
});

// POST A NEW medical history
// @POST /api/medical_history/:patient_id
router.post("/:patient_id", (req, res) => {
  res.send(`posting new medical_history for patient ${req.params.patient_id}`);
});

// UPDATE  medical history
// @PUT /api/medical_history/:patient_id
router.put("/:patient_id", (req, res) => {
  res.send(`medical history ${req.params.patient_id} has been updated`);
});

module.exports = router;
