const mongoose = require("mongoose");

const patientLogsSchema = new mongoose.Schema({
  log: [{ date: { type: String }, user: { type: String, default: "ahmed" } }]
});

module.exports = mongoose.model("patien_logs", patientLogsSchema);
