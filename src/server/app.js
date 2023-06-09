const express = require("express");
const morgan = require("morgan");
const routes = require("../routes/index");

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(routes);

module.exports = server;
