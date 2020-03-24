// articles management
const express = require("express");
const router = express.Router();

// GET ALL THE articles
// @GET /api/articles
router.get("/", (req, res) => {
  res.send("this is all articles");
});

// GET one articles
// @GET /api/articles/:id
router.get("/:id", (req, res) => {
  res.send(` the articles is ${req.params.id}`);
});

// POST A NEW articles
// @POST /articles/food
router.post("/", (req, res) => {
  res.send("posting new articles");
});

// UPDATE  FOOD
// @PUT /api/food/id
router.put("/:id", (req, res) => {
  res.send(`articles ${req.params.id} has been updated`);
});

// DELETE FOOD
// @DELETE /api/food/id
router.delete("/:id", (req, res) => {
  res.send(`articles ${req.params.id} had been deleted`);
});

module.exports = router;
