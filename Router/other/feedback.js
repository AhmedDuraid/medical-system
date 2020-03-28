// articles management
const express = require("express");
const router = express.Router();

const {
  getFeedback,
  getFeedbackById,
  addNewFeedback
} = require("../../DB/othersDB/feedbackDB");

// GET ALL FEEDBACK
// @GET /api/feedback
router.get("/", async (req, res) => {
  const data = await getFeedback();

  res.status(data.status).send(data);
});

// GET ONE FEEDBACK
//@GET /api/feedback/:id
router.get("/:id", async (req, res) => {
  const data = await getFeedbackById(req.params.id);

  res.status(data.status).send(data);
});

// POST NEW FEEDBACK
// @POST /api/feedback
router.post("/", async (req, res) => {
  const newPost = await addNewFeedback(req.body);

  res.status(newPost.status).send(newPost);
});

module.exports = router;
