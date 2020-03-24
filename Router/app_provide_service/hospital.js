// patient plan managment informations
const express = require("express");
const router = express.Router();

// NOT sure d

// GET one patient plan
// @GET /api/patient_plan/:id
router.get("/:id", (req, res) => {
  res.send(` the patient informations plan ${req.params.id}`);
});

// POST A NEW PLAN
// @POST /api/patient_plan
router.post("/", (req, res) => {
  res.send("posting new patient plan ");
});

// UPDATE  PATIENT PLAN
// @PUT /api/patient_paln/id
router.put("/:id", (req, res) => {
  res.send(`patient plan ${req.params.id} has been updated`);
});

// DELETE paln for the patient
// @DELETE /api/patient_plan/id
router.delete("/:id", (req, res) => {
  res.send(`patient plans ${req.params.id} had been deleted`);
});

module.exports = router;
