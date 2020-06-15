// patient plan managment informations
const express = require("express");
const router = express.Router();

const {
  getPatientProfile,
  deletePatientProfile,
  updatePatientProfile,
  createPatientProfile,
  getAllPatientsProfiles,
} = require("../../DB/patientProfile/patientProfileDB");

// GET All patient profile
// @GET /api/patient_profile
router.get("/", async (req, res) => {
  const patientProfile = await getAllPatientsProfiles();

  res.status(patientProfile.status).send(patientProfile);
});

// GET one patient profile
// @GET /api/patient_profile/:id
router.get("/:id", async (req, res) => {
  const patientProfile = await getPatientProfile(req.params.id);

  res.status(patientProfile.status).send(patientProfile);
});

// POST A NEW PLAN
// @POST /api/patient_profile
router.post("/", async (req, res) => {
  const patientProfile = await createPatientProfile(req.body);

  res.status(patientProfile.status).send(patientProfile);
});

// UPDATE  PATIENT PROFILE
// @PUT /api/patient_profile/id
router.put("/:id", async (req, res) => {
  const patientProfile = await updatePatientProfile(req.params.id, req.body);

  res.status(patientProfile.status).send(patientProfile);
});

// DELETE PATIENT PROFILE
// @DELETE /api/patient_profile/id
router.delete("/:id", async (req, res) => {
  const patientProfile = await deletePatientProfile(req.params.id);

  res.status(patientProfile.status).send(patientProfile);
});

module.exports = router;
