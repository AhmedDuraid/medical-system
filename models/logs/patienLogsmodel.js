const mongoose = require("mongoose");

const patientLogsSchema = new mongoose.Schema({
  log: [
    {
      date: { type: Date, default: Date.now },
      user: { type: String },
      action: String,
    },
  ],
});

module.exports = mongoose.model("patien_logs", patientLogsSchema);
