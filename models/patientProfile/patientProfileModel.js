const mongoose = require("mongoose");

const patientProfileSchema = new mongoose.Schema({
  patientID: {
    type: String,
    required: true,
  },
  medicalHistory: String,
  plan: {},
  progress: [{ date: { type: Date, default: Date.now }, weight: Number }],
  doctorNote: [{ date: { type: Date, default: Date.now }, note: String }],
  labReq: [
    {
      date: { type: Date, default: Date.now },
      labTest: String,
      isActive: { type: Boolean, default: true },
    },
  ],
  labRes: [{ labTestID: String, labRes: {} }],
});

module.exports = mongoose.model("patientProfile", patientProfileSchema);
