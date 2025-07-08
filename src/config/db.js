const mongoose = require("mongoose");
const config = require("./config");

const dbConnect = async () => {
  try {
    if (config.get("nodeEnv") === "development") {
      mongoose.connection.on("connected", () => {
        console.log("Connected to local database successfully.");
      });
      mongoose.connection.on("error", (err) => {
        console.error("Error connecting to the local database:", err.message);
      });
      await mongoose.connect(config.get("localDatabaseUrl"));
    } else {
      mongoose.connection.on("connected", () => {
        console.log("Connected to database successfully.");
      });
      mongoose.connection.on("error", (err) => {
        console.error("Error connecting to the database:", err.message);
      });
      await mongoose.connect(config.get("databaseUrl"));
    }
  } catch (err) {
    console.error("Failed to connect to the database:", err);
    process.exit(1);
  }
};
module.exports = dbConnect;
