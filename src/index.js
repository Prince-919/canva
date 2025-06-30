const http = require("node:http");
const app = require("./app");
const { config } = require("./config");
const dbConnect = require("./config/db");

const createServer = http.createServer(app);

const startServer = async () => {
  try {
    await dbConnect();
    const port = config.get("port");
    createServer.listen(port, () => {
      console.log(`Server is running on port at http://localhost:${port}.`);
    });
  } catch (error) {
    console.log(error);
  }
};
startServer();
