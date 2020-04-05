//  MANAGMENT PLANS INFORMATIONS
const express = require("express");
const router = express.Router();

const { newPlan } = require("../../DB/serviceDB/planDB");
// REQUIEST ALL PLANS DATA
// @GET /api/plan
router.get("/", (req, res) => {
  res.send("this is plans data ");
});

// REQUIEST ONE PLAN DATA
// @GET /api/plan/:id
router.get("/:id", (req, res) => {
  res.send(`this is plan data ${req.params.id}`);
});

// ADD PLAN DATA
// @POST /api/plan
router.post("/", async (req, res) => {
  // ADDING USER DATA IN THE DATABASE

  const plan = await newPlan(req.body);

  res.status(plan.status).send(plan);
});

// UPDATE PLAN
// @PUT /api/plan/:id
router.put("/:id", (req, res) => {
  res.send(`PLAN HAS BEEN UPDATE ${req.params.id}`);
});

// DELETE PLAN FROM THE DATABASE
// @DELETE /api/plan
router.delete("/:id", (req, res) => {
  res.send(`PLAN HAS BEEN REMOVED ${req.params.id}`);
});

module.exports = router;
