const mongoose = require("mongoose");

const planSchema = new mongoose.Schema({
  planName: {
    type: String,
    required: true,
  },
  foodPlan: [{ day: Number, plan: {} }],
  exercise: [{ day: Number, plan: {} }],
  medicine: { type: String },
});

module.exports = mongoose.model("plans", planSchema);
