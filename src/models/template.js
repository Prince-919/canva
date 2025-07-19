const { model, Schema } = require("mongoose");

const templatesSchema = new Schema(
  {
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

module.exports = model("Template", templatesSchema);
