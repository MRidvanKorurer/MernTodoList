const mongoose = require("mongoose");

const noteSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    Date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const Note = mongoose.model("note", noteSchema);

module.exports = Note;
