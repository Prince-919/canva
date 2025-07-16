const { model, Schema } = require("mongoose");

const designSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    components: {
      type: Array,
      default: [],
    },
    imageUrl: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = model("Design", designSchema);
