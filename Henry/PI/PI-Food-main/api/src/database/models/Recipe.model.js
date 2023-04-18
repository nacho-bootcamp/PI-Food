const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("..");
const Diest = require("./Diets.model");

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
const Recipe = sequelize.define(
  "recipe",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    healthScore: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0,
        max: 100,
      },
    },
    stepbyStep: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
    },
  },
  { timestamps: false, freezeTableName: true }
);

//RelationsShips
Recipe.belongsToMany(Diest, { through: "Recipe_Diest" });
Diest.belongsToMany(Recipe, { through: "Recipe_Diest" });

module.exports = Recipe;
