const app = require("./app");
const sequelize = require("../database");

function main() {
  app.listen(3001, async () => {
    try {
      await sequelize.authenticate();
      await sequelize.sync();

      console.log("estamos conectado");
    } catch (error) {
      console.log(error.message);
    }
    console.log("Listening in port 3001");
  });
}

main();
