// articles management
const express = require("express");
const router = express.Router();

const {
  getArticleById,
  getArticles,
  addArticle,
  deleteArticle,
  updateArticle
} = require("../../DB/othersDB/articleDB");

// GET ALL THE articles
// @GET /api/articles
router.get("/", async (req, res) => {
  const articles = await getArticles();

  res.status(articles.status).send(articles);
});

// GET one articles
// @GET /api/articles/:id
router.get("/:id", async (req, res) => {
  const article = await getArticleById(req.params.id);
  res.status(article.status).send(article);
});

// POST NEW ARTICLE
// @POST /api/api/articles/
router.post("/", async (req, res) => {
  const newArticle = await addArticle(req.body);

  res.status(newArticle.status).send(newArticle);
});

// UPDATE  articles
// @PUT /api/articles/id
router.put("/:id", async (req, res) => {
  const article = await updateArticle(req.params.id, req.body);

  res.status(article.status).send(article);
});

// DELETE articles
// @DELETE /api/articles/id
router.delete("/:id", async (req, res) => {
  const article = await deleteArticle(req.params.id);

  res.status(article.status).send(article);
});

module.exports = router;
