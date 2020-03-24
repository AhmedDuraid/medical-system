const express = require("express");

const colors = require("colors");
const dotenv = require("dotenv");
const mongoos = require("mongoose");

// Routers
const user = require("./Router/users/user");
const patient = require("./Router/users/patient");
const medicine = require("./Router/service/medicine");
const plan = require("./Router/service/plan");
const food = require("./Router/app_provide_service/food");
const progress = require("./Router/progress");
const bmi = require("./Router/app_provide_service/bmi");
const article = require("./Router/other/articles");
const feedback = require("./Router/other/feedback");
const hospital = require("./Router/app_provide_service/hospital");

// Env Setep
const app = express();

dotenv.config({ path: "./config/config.env" });
app.use(express.json());

// Routers use

app.use("/api/user", user);
app.use("/api/patient", patient);
app.use("/api/medicine", medicine);
app.use("/api/plan", plan);
app.use("/api/food", food);
app.use("/api/progress", progress);
app.use("/api/bmi", bmi);
app.use("/api/article", article);
app.use("/api/feedback", feedback);
// app.use("/api/hospital", hospital);

// database connection

// server connection

const PORT = process.env.PORT || 5000;

app.listen(PORT, function() {
  console.log(`server start on port: ${PORT}`.yellow.bold);
});
