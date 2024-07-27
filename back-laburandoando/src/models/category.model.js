const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: false,
    minLength: 3,
    maxLength: 25,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  /* Relaciones */
  work: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Work",
    required: true,
  },
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
