const express = require("express");
const Product = require("./products/model");
const Categorie = require("./categories/model");

const port = 4000;

const app = express();

app.listen(port, () => {
  console.log(`app listen on ${port}`);
});
