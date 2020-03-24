// BMI managment
const express = require("express");
const router = express.Router();

// GET MBI INFORMATION a
// @GET /api/MBI
// JSON OBJECT NEED:
/*
{
  weight: {
    weight: Number,
    unit: String
  },
  height: {
    height: Number,
    unit: String
  }
};
*/
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
  res.send(`the BMI is ${BMI}`);
});

module.exports = router;
