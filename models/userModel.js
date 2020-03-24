const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    maxlength: 50,
    minlength: 5,
    required: true
  },
  password: {
    type: String,
    required: true,
    maxlength: 200,
    minlength: 8
  },
  firstName: {
    type: String,
    required: true,
    maxlength: 20,
    minlength: 3
  },
  lastName: {
    type: String,
    required: true,
    maxlength: 30,
    minlength: 3
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  userType: {
    type: String,
    required: true
  },
  phone: Number,
  gender: {
    type: String,
    maxlength: 1
  },
  email: {
    type: String,
    maxlength: 50
  },
  dateOfCreate: {
    type: Date,
    default: Date.now
  },
  nationality: String,
  address: String
});

module.exports = mongoose.model("Users", userSchema);
