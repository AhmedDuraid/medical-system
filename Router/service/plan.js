//  MANAGMENT PLANS INFORMATIONS
const express = require("express");
const router = express.Router();

const {
  getPlans,
  createNewPlan,
  deletePlan,
  getPlanByID,
  updatePlan,
} = require("../../DB/serviceDB/planDB");

// REQUIEST ALL PLANS DATA
// @GET /api/plan
router.get("/", async (req, res) => {
  const plan = await getPlans();

  res.status(plan.status).send(plan);
});

// REQUIEST ONE PLAN DATA
// @GET /api/plan/:id
router.get("/:id", async (req, res) => {
  const plan = await getPlanByID(req.params.id);

  res.status(plan.status).send(plan);
});

// ADD PLAN DATA
// @POST /api/plan
router.post("/", async (req, res) => {
  // ADDING USER DATA IN THE DATABASE

  const plan = await createNewPlan(req.body);

  res.status(plan.status).send(plan);
});

// UPDATE PLAN
// @PUT /api/plan/:id
router.put("/:id", async (req, res) => {
  const plan = await updatePlan(req.params.id, req.body);

  res.status(plan.status).send(plan);
});

// DELETE PLAN FROM THE DATABASE
// @DELETE /api/plan
router.delete("/:id", async (req, res) => {
  const plan = await deletePlan(req.params.id);

  res.status(plan.status).send(plan);
});

module.exports = router;
