const mongoose = require("mongoose");

const medicineSchema = new mongoose.Schema({
  medName: {
    type: String,
    required: true,
  },
  medUses: {
    type: [String],
  },
  medDescr: String,
  createDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("medicine", medicineSchema);
