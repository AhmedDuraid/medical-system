const mongoose = require("mongoose");

const patientProfileSchema = new mongoose.Schema({
  patientID: {
    type: String,
    required: true,
  },
  medicalHistory: {
    type: Object,
  },
  plan: {
    type: Object,
  },
});

module.exports = mongoose.model("medicalHistory", patientProfileSchema);
