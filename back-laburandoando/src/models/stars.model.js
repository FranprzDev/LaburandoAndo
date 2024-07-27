const mongoose = require("mongoose");

const starsSchema = mongoose.Schema({
  rating: {
    type: Number,
    required: true,
    trim: true,
    unique: false,
    min: 1,
    max: 5,
  },
  createdAt: {
    type: Date,
    required: true,
    trim: true,
    unique: false,
    default: Date.now,
  },
});

const Star = mongoose.model("Star", starsSchema);

module.exports = Star;