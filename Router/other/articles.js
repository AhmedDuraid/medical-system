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

  switch (articles.status) {
    case 200:
      res.status(200).send(articles);
      break;
    case 404:
      res.status(404).send(articles);
      break;
    case 400:
      res.status(400).send(articles);
      break;
    default:
      return;
  }
});

// GET one articles
// @GET /api/articles/:id
router.get("/:id", async (req, res) => {
  const article = await getArticleById(req.params.id);

  switch (article.status) {
    case 200:
      res.status(200).send(article);
      break;
    case 404:
      res.status(404).send(article);
      break;
    case 400:
      res.status(400).send(article);
      break;
    default:
      return;
  }
});

// POST NEW ARTICLE
// @POST /api/api/articles/
router.post("/", async (req, res) => {
  const newArticle = await addArticle(req.body);

  switch (newArticle.status) {
    case 200:
      res.status(200).send(newArticle);
      break;
    case 404:
      res.status(404).send(newArticle);
      break;
    default:
      return;
  }
});

// UPDATE  articles
// @PUT /api/articles/id
router.put("/:id", async (req, res) => {
  const article = await updateArticle(req.params.id, req.body);

  switch (article.status) {
    case 200:
      res.status(200).send(article);
      break;
    case 400:
      res.status(400).send(article);
      break;
    default:
      return;
  }
});

// DELETE articles
// @DELETE /api/articles/id
router.delete("/:id", async (req, res) => {
  const article = await deleteArticle(req.params.id);

  switch (article.status) {
    case 200:
      res.status(200).send(article);
      break;
    case 400:
      res.status(400).send(article);
      break;
    default:
      return;
  }
});

module.exports = router;
