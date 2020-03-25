//  MANAGMENT USER INFORMATIONS
const express = require("express");
const router = express.Router();

const { addNewUser, getUsers } = require("../../DB/user");

// REQUIEST ONE USER DATA
// @GET /api/user
router.get("/:id", (req, res) => {
  res.send(`this is user data ${req.params.id}`);
});

// REQUIEST ALL USER DATA
// @GET /api/user
router.get("/", async (req, res) => {
  const users = await getUsers();
  res.status(200).send(users);
});

// ADD USER DATA
// @POST /api/user
router.post("/", async (req, res) => {
  // ADDING USER DATA IN THE DATABASE

  console.log(req.body);

  const createNewUser = await addNewUser(req.body);

  res.send(createNewUser);
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
