const mongoose = require("mongoose");

const redSchema = mongoose.Schema({
  whatsappNumber: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    minLength: 7,
    maxLength: 25,
  },
  facebook: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    minLength: 7,
    maxLength: 25,
  },
  discord: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    minLength: 7,
    maxLength: 25,
  },
  /* Relaciones */
  worker: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Worker",
    required: true,
  },
});

const Red = mongoose.model("Red", redSchema);

module.exports = Red;
