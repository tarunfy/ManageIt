const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please give a name to your project"],
    },

    description: {
      type: String,
      required: [true, "Please add a description of your project"],
    },

    liveDemo: {
      type: String,
      required: [true, "Please give the live demo link of your project"],
    },

    repoLink: {
      type: String,
      required: [true, "Please give the repo link of your project"],
    },

    userId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Project", ProjectSchema);
