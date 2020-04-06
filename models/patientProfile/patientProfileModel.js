const mongoose = require("mongoose");

const patientProfileSchema = new mongoose.Schema({
  patientID: {
    type: String,
    required: true,
  },
  medicalHistory: {},
  plan: {},
  progress: [{ date: Date, weight: Number }],
  doctorNote: [{ date: Date, note: String }],
});

module.exports = mongoose.model("patientProfile", patientProfileSchema);
