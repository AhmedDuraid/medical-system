// patient plan managment informations
const express = require("express");
const router = express.Router();

const {
  getPatientProfile,
  deletePatientProfile,
  updatePatientProfile,
  createPatientProfile,
} = require("../../DB/patientProfile/patientProfileDB");

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

// // MEDICAL HISTORY

// // GET one THE medical history
// // @GET /api/patient_profile/medical_history/:patient_id
// router.get("/:patient_id", (req, res) => {
//   res.send(` the med is ${req.params.patient_id}`);
// });

// // POST A NEW medical history
// // @POST /api/patient_profile/medical_history/:patient_id
// router.post("/:patient_id", (req, res) => {
//   res.send(`posting new medical_history for patient ${req.params.patient_id}`);
// });

// // UPDATE  medical history
// // @PUT /api/patient_profile/medical_history/:patient_id
// router.put("/:patient_id", (req, res) => {
//   res.send(`medical history ${req.params.patient_id} has been updated`);
// });

// // PATIENT PROGRESS

// // UPDATE  PROGRESS
// // @PUT /api/progress/id
// router.put("/progress/:id", (req, res) => {
//   res.send(`PROGRESS ${req.params.id} has been updated`);
// });

// // GET PROGRESS
// // @GET /api/progress/:id
// router.get("/progress/:id", (req, res) => {
//   res.send(`this is patient progress ${req.params.id}`);
// });

module.exports = router;
