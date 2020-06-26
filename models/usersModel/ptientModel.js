const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  userType: {
    type: String,
    default: "patient",
  },
  phone: Number,
  gender: {
    type: String,
    maxlength: 1,
    required: true,
  },
  email: {
    type: String,
    maxlength: 50,
  },
  dateOfCreate: {
    type: Date,
    default: Date.now(),
  },
  nationality: String,
  address: String,
  weight: Number,
  height: Number,
  bmi: Number,
});

module.exports = mongoose.model("patient_information", patientSchema);
