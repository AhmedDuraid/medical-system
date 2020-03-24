// Food managment informations
const express = require("express");
const router = express.Router();

// GET ALL THE Food
// @GET /api/food
router.get("/", (req, res) => {
  res.send("this is all foods");
});

// GET one THE FOOD
// @GET /api/food/:id
router.get("/:id", (req, res) => {
  res.send(` the food is ${req.params.id}`);
});

// POST A NEW FOOD
// @POST /api/food
router.post("/", (req, res) => {
  res.send("posting new Food");
});

// UPDATE  FOOD
// @PUT /api/food/id
router.put("/:id", (req, res) => {
  res.send(`food ${req.params.id} has been updated`);
});

// DELETE FOOD
// @DELETE /api/food/id
router.delete("/:id", (req, res) => {
  res.send(`FOOD ${req.params.id} had been deleted`);
});

module.exports = router;
