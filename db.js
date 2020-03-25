const Sequelize = require("sequelize");

const databaseURL = "postgres://postgres:secret@localhost:5432/postgres";

const db = new Sequelize(databaseURL);

db.sync({ force: false })
  .then(() => console.log("database connected"))
  .catch(console.error);

module.exports = db;
