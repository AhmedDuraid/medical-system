// articles management
const express = require("express");
const router = express.Router();

// POST NEW FEEDBACK
// @POST /api/feedback
router.post("/", (req, res) => {
  res.send("post all feedback");
});

// GET ALL FEEDBACK
// @GET /api/feedback
router.get("/", (req, res) => {
  res.send("get all feedback");
});

// GET ONE FEEDBACK
//@GET /api/feedback/:id
router.post("/:id", (req, res) => {
  res.send(`this is ger req for one feedback ${req.params.id}`);
});
module.exports = router;
