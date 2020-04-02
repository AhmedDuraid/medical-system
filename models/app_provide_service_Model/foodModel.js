const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  foodName: {
    type: String,
    required: true
  },
  calcium: Number,
  carbs: Number,
  fat: Number,
  iron: Number,
  fiber: Number,
  sodium: Number
});

module.exports = mongoose.model("food", foodSchema);
