const express = require("express");
const cors = require("cors");
const path = require("path");
const { config } = require("./config");

const app = express();

app.use(express.json());

if (config.get("nodeEnv") === "development") {
  app.use(
    cors({
      origin: "http://localhost:5173",
    })
  );
} else {
  app.use(
    cors({
      credentials: true,
    })
  );
}

app.use("/api", require("./routes/auth"));
app.use("/api", require("./routes/design"));

if (config.get("nodeEnv") === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "../", "frontend", "dist", "index.html")
    );
  });
}

module.exports = app;
