// patient managment informations
const express = require("express");
const router = express.Router();
const {
  addNewPatient,
  getPatientByname: getPatientByName,
  getPatientsInformation,
  getPatientById
} = require("../../DB/patientDB");

// GET ONE patient DATA
// @GET /api/patient/id:
router.get("/:id", async (req, res) => {
  const patient = await getPatientById();
  res.status(200).send(patient);
});

// GET  patient DATA by name
// @GET /api/patient/name:
router.get("/:name", async (req, res) => {
  const patientData = await getPatientByName();
  res.status(200).send(patientData);
});

// GET ALL PATIENT DATA
// @GET /api/patient
router.get("/", async (req, res) => {
  const patientsData = await getPatientsInformation();
  res.status(200).send(patientsData);
});

// POST NEW PATIENT
// @POST /api/patient
router.post("/", async (req, res) => {
  const newPatient = await addNewPatient(req.body);

  res.status(200).send(`patient ${req.body.firstname} has been added `);
});

// UPDATE PATIENT DATA
// @PUT /api/patient/id:
router.put("/:id", (req, res) => {
  res.send(`UPDATE THE PATIENT DATA ${req.params.id}`);
});

// DELETE  PATIENT DATA
// @DELETE /api/patient/id:
router.delete("/:id", (req, res) => {
  res.send(`DELETE PATIENT DATA ${req.params.id}`);
});

module.exports = router;
