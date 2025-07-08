const express = require("express");
const cors = require("cors");
const path = require("node:path");
const { config } = require("./config");

const app = express();

if (config.get("nodeEnv") === "development") {
  app.use(
    cors({
      origin: "http://localhost:3000",
    })
  );
} else {
  app.use(
    cors({
      credentials: true,
    })
  );
}

if (config.get("nodeEnv") === "production") {
  app.use(express.static(path.join(__dirname, "./frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "./", "frontend", "dist", "index.html")
    );
  });
}

module.exports = app;
