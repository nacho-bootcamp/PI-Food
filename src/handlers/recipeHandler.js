const {
  createRecipe,
  getRecipebyId,
} = require("../controllers/recipeControllers");

const getAll = (req, res) => {
  const { name } = req.query;
  if (name) {
    res.status(200).send("esta funcionando por nombre");
  } else {
    res.status(500).send("mi error");
  }
};

const getId = async (req, res) => {
  const { id } = req.params;
  try {
    const recipe = await getRecipebyId(id);
    res.status(200).send(recipe);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const postRecipe = (req, res) => {
  const { name, image, summary, healthScore, stepbyStep, diets } = req.body;
  try {
    const newRecipe = createRecipe(
      name,
      image,
      summary,
      healthScore,
      stepbyStep,
      diets
    );
    res.status(201).send(newRecipe);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = {
  getAll,
  getId,
  postRecipe,
};
