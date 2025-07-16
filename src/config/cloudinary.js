const { v2: cloudinary } = require("cloudinary");
const config = require("./config");

cloudinary.config({
  cloud_name: config.get("cloudinaryName"),
  api_key: config.get("cloudinaryKey"),
  api_secret: config.get("cloudinarySecret"),
});
module.exports = cloudinary;
