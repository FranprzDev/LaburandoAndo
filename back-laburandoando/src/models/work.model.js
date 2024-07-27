const mongoose = require("mongoose");

const workSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: false,
    minLength: 3,
    maxLength: 25,
  },
  description: {
    type: String,
    required: true,
    trim: true,
    unique: false,
    minLength: 3,
    maxLength: 70,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  /* Relaciones */
  worker: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Worker",
    required: true,
  },
});

const Work = mongoose.model("Work", workSchema);

module.exports = Work;
