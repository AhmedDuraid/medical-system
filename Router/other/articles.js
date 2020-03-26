// articles management
const express = require("express");
const router = express.Router();

const {
  getArticleById,
  getArticles,
  addArticle
} = require("../../DB/articleDB");

// GET ALL THE articles
// @GET /api/articles
router.get("/", async (req, res) => {
  await getArticles();
  res.send("this is all articles");
});

// GET one articles
// @GET /api/articles/:id
router.get("/:id", (req, res) => {
  res.send(` the articles is ${req.params.id}`);
});

// POST A NEW articles
// @POST /articles/food
router.post("/", async (req, res) => {
  await addArticle(req.body);
  res.send("posting new articles");
});

// UPDATE  FOOD
// @PUT /api/articles/id
router.put("/:id", async (req, res) => {
  await getArticleById(req.params.id);
  res.send(`articles ${req.params.id} has been updated`);
});

// DELETE FOOD
// @DELETE /api/articles/id
router.delete("/:id", (req, res) => {
  res.send(`articles ${req.params.id} had been deleted`);
});

module.exports = router;
