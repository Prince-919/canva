const http = require("node:http");
const app = require("./app");
const { config, dbConnect } = require("./config");

const server = http.createServer(app);

const startServer = async () => {
  try {
    await dbConnect();
    const port = config.get("port") || 5000;
    server.listen(port, () => {
      console.log(`Server is running on port at http:localhost:${port}.`);
    });
  } catch (error) {
    console.log("Server start failed.");
  }
};
startServer();
