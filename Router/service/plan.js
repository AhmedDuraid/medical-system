//  MANAGMENT PLANS INFORMATIONS
const express = require("express");
const router = express.Router();

// REQUIEST ONE PLAN DATA
// @GET /api/plan/:id
router.get("/:id", (req, res) => {
  res.send(`this is plan data ${req.params.id}`);
});

// REQUIEST ALL PLANS DATA
// @GET /api/plan
router.get("/", (req, res) => {
  res.send("this is plans data ");
});

// ADD PLAN DATA
// @POST /api/plan
router.post("/", (req, res) => {
  // ADDING USER DATA IN THE DATABASE
  res.send("plan has been add");
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
