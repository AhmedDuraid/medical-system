// patient managment informations
const express = require("express");
const router = express.Router();
const {
  getPatientById,
  getPatientByName,
  getPatientsInformation,
  addNewPatient,
  updatePatient,
  deletePatientByID
} = require("../../DB/patientDB");

// 400 bad request, 200 ok, 404 not found

// GET ALL PATIENT DATA
// @GET /api/patient
router.get("/", async (req, res) => {
  try {
    const DBPatientsData = await getPatientsInformation();

    switch (DBPatientsData.status) {
      case 200:
        res.status(200).send(DBPatientsData);
        break;
      case 404:
        res.status(404).send(DBPatientsData.server_message);
        break;
      case 400:
        res.status(400).send(DBPatientsData);
      default:
        return;
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// GET ONE patient DATA
// @GET /api/patient/id:
router.get("/:id", async (req, res) => {
  try {
    const DBPatientData = await getPatientById(req.params.id);

    switch (DBPatientData.status) {
      case 200:
        res.status(200).send(DBPatientData);
        break;
      case 404:
        res.status(404).send(DBPatientData);
        break;
      case 400:
        res.status(400).send(DBPatientData);
      default:
        return;
    }
  } catch (error) {
    console.log(error);

    res.status(500).json({ error: error });
  }
});

// GET  patient DATA by name
// @GET /api/patient/name/:name
router.get("/name/:name", async (req, res) => {
  try {
    const DBPatientsData = await getPatientByName(req.params.name);

    switch (DBPatientsData.status) {
      case 200:
        res.status(200).send(DBPatientsData);
        break;
      case 404:
        res.status(404).send(DBPatientsData.server_message);
        break;
      case 400:
        res.status(400).send(DBPatientsData);
      default:
        return;
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// POST NEW PATIENT
// @POST /api/patient
router.post("/", async (req, res) => {
  try {
    const newPatient = await addNewPatient(req.body);

    switch (newPatient.status) {
      case 200:
        res.status(200).send(newPatient);
        break;
      case 400:
        res.status(400).send(newPatient);
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// UPDATE PATIENT DATA
// @PUT /api/patient/id:
router.put("/:id", async (req, res) => {
  try {
    const DBUpdate = await updatePatient(req.params.id, req.body);
    res.status(200).send(DBUpdate);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// DELETE  PATIENT DATA
// @DELETE /api/patient/id:
router.delete("/:id", async (req, res) => {
  try {
    const deletePatient = await deletePatientByID(req.params.id);

    res.status(200).send(deletePatient);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

module.exports = router;
