const { Router } = require("express");
const getDiests = require("../handlers/dietHandler");

const diets = Router();

diets.get("/", getDiests);

module.exports = diets;
