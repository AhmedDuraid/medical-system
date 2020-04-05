// medicine managment informations
const express = require("express");
const router = express.Router();

const {
  getMeds,
  getMedByname,
  createMed,
  updateMed,
  deleteMed,
} = require("../../DB/serviceDB/medicineDB");

// GET ALL THE MEDICINE
// @GET /api/medicine
router.get("/", async (req, res) => {
  const allMeds = await getMeds();

  res.status(allMeds.status).send(allMeds);
});

// GET one THE MEDICINE
// @GET /api/medicine/:id
router.get("/:name", async (req, res) => {
  const med = await getMedByname(req.params.name);

  res.status(med.status).send(med);
});

// POST A NEW MEDICINE
// @POST /api/medicine
router.post("/", async (req, res) => {
  const med = await createMed(req.body);

  res.status(med.status).send(med);
});

// UPDATE  MEDICINE
// @PUT /api/medicine/id
router.put("/:id", async (req, res) => {
  const med = await updateMed(req.params.id, req.body);

  res.status(med.status).send(med);
});

// DELETE MEDICINE
// @DELETE /api/medicine/id
router.delete("/:id", async (req, res) => {
  const med = await deleteMed(req.params.id);

  res.status(med.status).send(med);
});

module.exports = router;
