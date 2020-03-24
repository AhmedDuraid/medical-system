// patient managment informations
const express = require("express");
const router = express.Router();

// GET ONE patient DATA
// @GET /api/patient/id:
router.get("/:id", (req, res) => {
  res.send(`THIS IS PATIENT DATA ${req.params.id}`);
});

// GET ALL PATIENT DATA
// @GET /api/patient
router.get("/", (req, res) => {
  res.send("ALL PATIENT DATA ");
});

// POST NEW PATIENT
// @POST /api/patient
router.post("/", (req, res) => {
  res.send("ADDING NEW PATIENT ");
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
