require("dotenv").config();

const _config = {
  port: process.env.PORT,
  nodeEnv: process.env.NODE_ENV,
  localDatabaseUrl: process.env.LOCAL_MONGODB_URI,
  databaseUrl: process.env.MONGODB_CONNECTION_STRING,
};

const config = {
  get(key) {
    const value = _config[key];
    if (!value) {
      console.log(
        `The ${value} variable not found, Make to pass environment variable.`
      );
    }
    return value;
  },
};

module.exports = config;
