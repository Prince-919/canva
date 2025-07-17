const { model, Schema } = require("mongoose");

const backgroundSchema = new Schema(
  {
    imageUrl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model("Background", backgroundSchema);
