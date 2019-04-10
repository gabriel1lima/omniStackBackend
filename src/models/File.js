const mongoose = require("mongoose");

const File = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("File", File);
