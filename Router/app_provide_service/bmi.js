// BMI managment
const express = require("express");
const router = express.Router();

const { updatePatient } = require("../../DB/usersDB/patientDB");

// GET MBI INFORMATION
// @GET /api/MBI
// JSON OBJECT NEED:
router.get("/", (req, res) => {
  const userWeightInfo = req.body.weight;
  const userHeightInfo = req.body.height;
  let weight;
  let height;
  let heightSquared;
  let BMI;

  const unitIbs = 2.20462;
  const unitFoot = 30.48;

  if (userWeightInfo.unit === "ibs") {
    // change unit to kg
    weight = userWeightInfo.weight * unitIbs;
  } else {
    weight = userWeightInfo;
  }
  if (userHeightInfo.unit === "foot") {
    // change unit to cm
    height = userHeightInfo.height * unitFoot;
  } else {
    height = userHeightInfo;
  }
  heightSquared = height * height;
  BMI = weight / heightSquared;
  res.status(200).send(`the BMI is ${BMI}`);
});

// POSTING PATIENT BMI
// @POST /api/bmi
router.post("/:id", async (req, res) => {
  try {
    const patientBMI = await updatePatient(req.params.id, req.body);

    res.status(patientBMI.status).send(patientBMI);
  } catch (error) {
    res.status(500).send({ error: error });
  }

  // add it to patient progile
});

module.exports = router;
