//  MANAGMENT USER INFORMATIONS
const express = require("express");
const router = express.Router();

const {
  addNewUser,
  getUsers,
  getUserByName,
  updateUser,
  deleteUser
} = require("../../DB/user");

// REQUIEST ALL USER DATA
// @GET /api/user
router.get("/", async (req, res) => {
  try {
    const users = await getUsers();

    if (users.data.length === 0) {
      res.status(404).send(users.error.message);
    } else {
      res.status(200).send(users.data);
    }
  } catch (error) {
    console.log(error);
    res.status(500);
  }
});

// REQUIEST ONE USER DATA
// @GET /api/user
router.get("/:name", async (req, res) => {
  try {
    const user = await getUserByName(req.params.name);

    if (user.data.length > 0) {
      res.status(200).send(user.data);
    } else {
      res.status(404).send(user.error.message);
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

// ADD USER DATA
// @POST /api/user
router.post("/", async (req, res) => {
  // ADDING USER DATA IN THE DATABASE
  const createNewUser = await addNewUser(req.body);

  res.send(createNewUser);
});

// EDIT/UPDATE USER
// @PUT /api/user
router.put("/:id", async (req, res) => {
  const updated = await updateUser(req.params.id, req.body);
  if (updated.error.error) {
    res.status(200).send(updated.data.message);
  } else {
    res.status(404).send(updated);
  }
});

// DELETE USER FROM THE DATABASE
// @DELETE /api/user
router.delete("/:id", async (req, res) => {
  const deletedUser = await deleteUser(req.params.id);
  res.status(200).send(deletedUser.data.message);
});

module.exports = router;
