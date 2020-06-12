const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  titel: {
    type: String,
    required: true,
    maxlength: 50,
  },
  name: {
    type: String,
    required: true,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    maxlength: 50,
  },
  phone: {
    type: Number,
    required: true,
    max: 99999999,
  },
  feedbackBody: {
    type: String,
    required: true,
    maxlength: 2000,
  },
  createDate: {
    type: Date,
    default: Date.now(),
  },
  read: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("feedback", feedbackSchema);
