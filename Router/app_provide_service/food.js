// Food managment informations
const express = require("express");
const router = express.Router();

const {
  addNewFood,
  getFood,
  getFoodById,
  updateFood,
  deleteFood
} = require("../../DB/app_provide_service/foodDB");

// GET ALL THE Food
// @GET /api/food
router.get("/", async (req, res) => {
  const data = await getFood();

  res.status(data.status).send(data);
});

// GET one THE FOOD
// @GET /api/food/:id
router.get("/:id", async (req, res) => {
  const data = await getFoodById(req.params.id);

  res.status(data.status).send(data);
});

// POST A NEW FOOD
// @POST /api/food
router.post("/", async (req, res) => {
  const newData = await addNewFood(req.body);

  res.status(newData.status).send(newData);
});

// UPDATE  FOOD
// @PUT /api/food/id
router.put("/:id", async (req, res) => {
  const updateData = await updateFood(req.params.id, req.body);

  res.status(updateData.status).send(updateData);
});

// DELETE FOOD
// @DELETE /api/food/id
router.delete("/:id", async (req, res) => {
  const deleteData = await deleteFood(req.params.id);

  res.status(deleteData.status).send(deleteData);
});

module.exports = router;
