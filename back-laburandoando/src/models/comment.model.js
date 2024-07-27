const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  comment: {
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
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
