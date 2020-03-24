// medicine managment informations
const express = require("express");
const router = express.Router();

// GET ALL THE MEDICINE
// @GET /api/medicine
router.get("/", (req, res) => {
  res.send("this is all med");
});

// GET one THE MEDICINE
// @GET /api/medicine/:id
router.get("/:id", (req, res) => {
  res.send(` the med is ${req.params.id}`);
});

// POST A NEW MEDICINE
// @POST /api/medicine
router.post("/", (req, res) => {
  res.send("posting new medicine");
});

// UPDATE  MEDICINE
// @PUT /api/medicine/id
router.put("/:id", (req, res) => {
  res.send(`medicine ${req.params.id} has been updated`);
});

// DELETE MEDICINE
// @DELETE /api/medicine/id
router.delete("/:id", (req, res) => {
  res.send(`med ${req.params.id} had been deleted`);
});

module.exports = router;
