const server = require("./app");
const { sequelize } = require("../database/index");

server.listen(3001, () => {
  sequelize.sync({ force: true });
  console.log("estamos conectado");
});
