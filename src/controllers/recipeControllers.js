const { Recipe } = require("../database/index");

const getRecipebyId = (id) => {};

const createRecipe = async (
  name,
  image,
  summary,
  healthScore,
  stepbyStep,
  diets
) => {
  await Recipe.create({ name, image, summary, healthScore, stepbyStep });
  createRecipe.addDiets(diets);
};

module.exports = { createRecipe, getRecipebyId };

// async function getRecipebyId(req, res) {
//   const { id } = req.params;
//   let recipe = {};
//   try {
//     const data = await recipe.findByPk(id);
//     if (data) {
//       let recipes = data;
//       return res.status(200).send(recipes);
//     }
//     await axios(
//       `https://api.spoonacular.com/recipes/${id}?key=77e0e45c970e4defa00a29287c4f3ede`.then(
//         ({ data }) => {
//           recipe = {
//             id: data.id,
//             name: data.name,
//           };
//         }
//       )
//     );

//     res.status(200).send("este esel id");
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
