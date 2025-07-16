require("dotenv").config();

const _config = {
  port: process.env.PORT,
  nodeEnv: process.env.NODE_ENV,
  databaseUrl: process.env.MONGODB_CONNECTION_STRING,
  localDatabaseUrl: process.env.LOCAL_MONGODB_CONNECTION_STRING,
  jwtSecret: process.env.JWT_SECRET,
  cloudinaryName: process.env.CLOUDINARY_NAME,
  cloudinaryKey: process.env.CLOUDINARY_KEY,
  cloudinarySecret: process.env.CLOUDINARY_SECRET,
};

const config = {
  get(key) {
    const value = _config[key];
    if (!value) {
      console.log(
        `The ${value} variable not found!, Make sure to pass environment variable.`
      );
    }
    return value;
  },
};
module.exports = config;
