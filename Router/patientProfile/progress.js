// Food managment informations
const express = require("express");
const router = express.Router();

// GET PROGRESS
// @GET /api/progress/:id
router.get("/:id", (req, res) => {
  res.send(`this is patient progress ${req.params.id}`);
});

// POST A NEW PROGRESS
// @POST /api/progress
router.post("/", (req, res) => {
  res.send("posting new progress");
});

// UPDATE  PROGRESS
// @PUT /api/PROGRESS/id
router.put("/:id", (req, res) => {
  res.send(`PROGRESS ${req.params.id} has been updated`);
});

// DELETE PROGRESS
// @DELETE /api/progress/id
router.delete("/:id", (req, res) => {
  res.send(`PROGRESS ${req.params.id} had been deleted`);
});

module.exports = router;
