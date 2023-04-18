const { Router } = require("express");
const diets = require("./Diets.router");
const recipe = require("./Recipe.router");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/diets", diets);
router.use("recipe", recipe);

module.exports = router;
