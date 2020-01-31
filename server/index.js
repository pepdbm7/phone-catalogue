const express = require("express");
const package = require("./package.json");
const router = require("./routes");

const app = express();

app.use("/", router);

app.listen(5000, () =>
  console.log(`${package.name} ${package.version} up and running on port 5000`)
);
