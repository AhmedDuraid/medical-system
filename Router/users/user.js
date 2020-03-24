//  MANAGMENT USER INFORMATIONS
const express = require("express");
const router = express.Router();

// REQUIEST ONE USER DATA
// @GET /api/user
router.get("/:id", (req, res) => {
  res.send(`this is user data ${req.params.id}`);
});

// REQUIEST ALL USER DATA
// @GET /api/user
router.get("/", (req, res) => {
  res.send("this is user data ");
});

// ADD USER DATA
// @POST /api/user
router.post("/", (req, res) => {
  // ADDING USER DATA IN THE DATABASE
  res.send("user has been add");
});

// DELETE USER FROM THE DATABASE
// @DELETE /api/user
router.delete("/:id", (req, res) => {
  res.send(`USER HAS BEEN REMOVED ${req.params.id}`);
});

// EDIT/UPDATE USER
// @PUT /api/user
router.put("/:id", (req, res) => {
  res.send(`USER HAS BEEN UPDATE ${req.params.id}`);
});

module.exports = router;
