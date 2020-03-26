const articleModel = require("../models/articleModel");

// get all articles
exports.getArticles = async () => {
  try {
    const articles = await articleModel.find();

    return articles;
  } catch (error) {
    return error;
  }
};

// get article by ID

exports.getArticleById = async articleID => {
  try {
    const articles = await articleModel.findById(articleID);

    return articles;
  } catch (error) {
    return error;
  }
};

// post a new article
exports.addArticle = async articleData => {
  const { articalTitel, createBy, articalBody } = articleData;
  try {
    const newArticles = await articleModel.create({
      articalBody: articalBody,
      articalTitel: articalTitel,
      createBy: createBy
    });

    return "article create";
  } catch (error) {
    return error;
  }
};
/*
// upadte article
exports.updateArticle = async articleUpdatedData => {
  const { articalTitel, articalBody, id } = articleUpdatedData;
  try {
    const findArticle = await articleModel.findById(id);
    findArticle.update({
      articalTitel: articalTitel,
      articalBody: articalBody
    });

    return "article update";
  } catch (error) {
    return error;
  }
};

// delete article
exports.deleteArticle = async articleID => {
  try {
    const newArticles = await articleModel.update({
      articalTitel: articalTitel,
      articalBody: articalBody
    });

    return "article create";
  } catch (error) {
    return error;
  }
};
*/
