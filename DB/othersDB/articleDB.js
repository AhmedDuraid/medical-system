const articleModel = require("../../models/othersModel/articleModel");

let DBarticleDataObject = {
  error: {
    error: false,
    message: null,
    type: null
  },
  data: null,
  status: 0,
  server_message: "" // 400 bad request, 200 ok, 404 not found
};

// get all articles
exports.getArticles = async () => {
  try {
    const articles = await articleModel.find();

    if (articles.length <= 0) {
      DBarticleDataObject.error.error = false;
      DBarticleDataObject.error.message = null;
      DBarticleDataObject.error.type = null;
      DBarticleDataObject.data = null;
      DBarticleDataObject.status = 404;
      DBarticleDataObject.server_message = "there is no articles";

      return DBarticleDataObject;
    }

    if (articles.length > 0) {
      let data = [];
      articles.map(article => {
        if (article.show === true) {
          data.push(article);
        }
      });

      DBarticleDataObject.error.error = false;
      DBarticleDataObject.error.message = null;
      DBarticleDataObject.error.type = null;
      DBarticleDataObject.data = data;
      DBarticleDataObject.status = 200;
      DBarticleDataObject.server_message = "articles found";

      return DBarticleDataObject;
    }
  } catch (error) {
    DBarticleDataObject.error.error = true;
    DBarticleDataObject.error.message = error.message;
    DBarticleDataObject.error.type = error.name;
    DBarticleDataObject.data = null;
    DBarticleDataObject.status = 400;
    DBarticleDataObject.server_message = "check error message ";

    return DBarticleDataObject;
  }
};

// get article by ID
exports.getArticleById = async articleID => {
  try {
    const articles = await articleModel.findById(articleID);

    if (articles && articles.show === true) {
      DBarticleDataObject.error.error = false;
      DBarticleDataObject.error.message = null;
      DBarticleDataObject.error.type = null;
      DBarticleDataObject.data = articles;
      DBarticleDataObject.status = 200;
      DBarticleDataObject.server_message = "articels found ";

      return DBarticleDataObject;
    } else {
      DBarticleDataObject.error.error = false;
      DBarticleDataObject.error.message = null;
      DBarticleDataObject.error.type = null;
      DBarticleDataObject.data = null;
      DBarticleDataObject.status = 404;
      DBarticleDataObject.server_message = "there is no articles";

      return DBarticleDataObject;
    }
  } catch (error) {
    DBarticleDataObject.error.error = true;
    DBarticleDataObject.error.message = error.message;
    DBarticleDataObject.error.type = error.name;
    DBarticleDataObject.data = null;
    DBarticleDataObject.status = 400;
    DBarticleDataObject.server_message = "check error message ";

    return DBarticleDataObject;
  }
};

// post a new article
exports.addArticle = async articleData => {
  const { articalTitel, createBy, articalBody } = articleData;
  try {
    await articleModel.create({
      articalBody: articalBody,
      articalTitel: articalTitel,
      createBy: createBy
    });

    DBarticleDataObject.error.error = false;
    DBarticleDataObject.error.message = null;
    DBarticleDataObject.error.type = null;
    DBarticleDataObject.data = null;
    DBarticleDataObject.status = 200;
    DBarticleDataObject.server_message = "articels created ";

    return DBarticleDataObject;
  } catch (error) {
    DBarticleDataObject.error.error = true;
    DBarticleDataObject.error.message = error.message;
    DBarticleDataObject.error.type = error.name;
    DBarticleDataObject.data = null;
    DBarticleDataObject.status = 400;
    DBarticleDataObject.server_message = "check error message ";

    return DBarticleDataObject;
  }
};

// upadte article
exports.updateArticle = async (articleID, articleData) => {
  try {
    await articleModel.findByIdAndUpdate(articleID, articleData);

    DBarticleDataObject.error.error = false;
    DBarticleDataObject.error.message = null;
    DBarticleDataObject.error.type = null;
    DBarticleDataObject.data = null;
    DBarticleDataObject.status = 200;
    DBarticleDataObject.server_message = "articels updated ";

    return DBarticleDataObject;
  } catch (error) {
    DBarticleDataObject.error.error = true;
    DBarticleDataObject.error.message = error.message;
    DBarticleDataObject.error.type = error.name;
    DBarticleDataObject.data = null;
    DBarticleDataObject.status = 400;
    DBarticleDataObject.server_message = "check error message ";

    return DBarticleDataObject;
  }
};

// delete article
exports.deleteArticle = async articleID => {
  try {
    const newArticles = await articleModel.findByIdAndUpdate(articleID, {
      show: false
    });

    DBarticleDataObject.error.error = false;
    DBarticleDataObject.error.message = null;
    DBarticleDataObject.error.type = null;
    DBarticleDataObject.data = null;
    DBarticleDataObject.status = 200;
    DBarticleDataObject.server_message = "articels deleted ";

    return DBarticleDataObject;
  } catch (error) {
    DBarticleDataObject.error.error = true;
    DBarticleDataObject.error.message = error.message;
    DBarticleDataObject.error.type = error.name;
    DBarticleDataObject.data = null;
    DBarticleDataObject.status = 400;
    DBarticleDataObject.server_message = "check error message ";

    return DBarticleDataObject;
  }
};
