const express = require("express");
const appController = require("./controllers/app.controller.js");

const app = express();

app.use(express.json());

const port = process.env.PORT;

if (!port) {
  throw new Error("port is undefined");
}

app.use("/", appController);

app.listen(port, () => console.log(`Listening on port ${port}`));
