const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  articalTitel: {
    type: String,
    required: true,
    minlength: 5
  },
  createDate: {
    type: Date,
    default: Date.now()
  },
  createBy: {
    type: String,
    required: true
  },
  articalBody: {
    type: String,
    required: true
  },
  lastUpdate: {
    type: Date,
    default: Date.now()
  },
  show: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model("article", articleSchema);
