const server = require("./app");
const { conn } = require("../database/index");

server.listen(3001, () => {
  conn.sync({ force: true });
  console.log("estamos conectado");
});
