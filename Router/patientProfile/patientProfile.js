// patient plan managment informations
const express = require("express");
const router = express.Router();

// GET one patient plan
// @GET /api/patient_profile/patient_plan/:id
router.get("/:id", (req, res) => {
  res.send(` the patient informations plan ${req.params.id}`);
});

// POST A NEW PLAN
// @POST /api/patient_profile/patient_plan
router.post("/", (req, res) => {
  res.send("posting new patient plan ");
});

// UPDATE  PATIENT PLAN
// @PUT /api/patient_profile/patient_paln/id
router.put("/:id", (req, res) => {
  res.send(`patient plan ${req.params.id} has been updated`);
});

// DELETE paln for the patient
// @DELETE /api/patient_profile/patient_plan/id
router.delete("/:id", (req, res) => {
  res.send(`patient plans ${req.params.id} had been deleted`);
});

// MEDICAL HISTORY

// GET one THE medical history
// @GET /api/patient_profile/medical_history/:patient_id
router.get("/:patient_id", (req, res) => {
  res.send(` the med is ${req.params.patient_id}`);
});

// POST A NEW medical history
// @POST /api/patient_profile/medical_history/:patient_id
router.post("/:patient_id", (req, res) => {
  res.send(`posting new medical_history for patient ${req.params.patient_id}`);
});

// UPDATE  medical history
// @PUT /api/patient_profile/medical_history/:patient_id
router.put("/:patient_id", (req, res) => {
  res.send(`medical history ${req.params.patient_id} has been updated`);
});

// PATIENT PROGRESS

// UPDATE  PROGRESS
// @PUT /api/progress/id
router.put("/progress/:id", (req, res) => {
  res.send(`PROGRESS ${req.params.id} has been updated`);
});

// GET PROGRESS
// @GET /api/progress/:id
router.get("/progress/:id", (req, res) => {
  res.send(`this is patient progress ${req.params.id}`);
});

module.exports = router;
