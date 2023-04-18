const { Router } = require("express");

const recipe = Router();

recipe.get("/recipes/name", (req, res) => {
  try {
    res.status(201).send("traer por nombre");
  } catch (error) {
    res.status(500).send("nombre no existe");
  }
});

recipe.get("/recipes/:id", (req, res) => {
  try {
    res.status(200), send("trae por id");
  } catch (error) {
    res.status(500).send("error mio ?");
  }
});

recipe.post("/recipes", (req, res) => {
  try {
    res.status(205).send("aqui se crea una receta");
  } catch (error) {
    res.status(500).send("no se creo la receta");
  }
});

module.exports = recipe;
