require("dotenv").config();
const { Sequelize } = require("sequelize");
const DietModel = require("./models/Diets");
const RecipeModel = require("./models/Recipe");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);

DietModel(sequelize);
RecipeModel(sequelize);

const { Recipe, Diet } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);
Recipe.belongsToMany(Diet, { through: "Recipe_Diets" });
Diet.belongsToMany(Recipe, { through: "Recipe_Diets" });

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
