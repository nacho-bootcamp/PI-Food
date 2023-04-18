const { Router } = require("express");
const diets = Router();

diets.get("/diets", (req, res) => {
  res.status(200).send("esto es la dieta");
});

module.exports = diets;
