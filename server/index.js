const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const router = require("./src/itunes.router");
const config = require("./config");

app.use(bodyParser.json());
app.use(router);
app.listen(config.app.port, () => console.log("Server Started"));