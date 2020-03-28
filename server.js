const express = require("express");

const colors = require("colors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

// Routers
const user = require("./Router/users/user");
const patient = require("./Router/users/patient");
const medicine = require("./Router/service/medicine");
const plan = require("./Router/service/plan");
const food = require("./Router/app_provide_service/food");
const bmi = require("./Router/app_provide_service/bmi");
const article = require("./Router/other/articles");
const feedback = require("./Router/other/feedback");
const hospital = require("./Router/app_provide_service/hospital");
const patientPlan = require("./Router/service/plan");
// ADD PATIENT PROFILE

// Env Setep
const app = express();
dotenv.config({ path: "./config/config.env" });
app.use(express.json());

// Routers in use

app.use("/api/user", user);
app.use("/api/patient", patient);
app.use("/api/article", article);
app.use("/api/bmi", bmi);

app.use("/api/medicine", medicine);
app.use("/api/plan", plan);
app.use("/api/food", food);

app.use("/api/feedback", feedback);
app.use("/api/hospital", hospital);
app.use("/api/patient_plan", patientPlan);

// database connection
mongoose.connect(
  process.env.DATABASE_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log(
      `data base hase been connected on port ${mongoose.connection.port} and host ${mongoose.connection.host} and database ${mongoose.connection.name}`
        .blue.bold
    );
  }
);

// server connection

const PORT = process.env.PORT || 5000;

app.listen(PORT, function() {
  console.log(`server start on port: ${PORT}`.yellow.bold);
});
