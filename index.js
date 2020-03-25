const express = require("express");
const productRouter = require("./products/router");
const cors = require("cors");

const app = express();

const corsMiddleware = cors();
app.use(corsMiddleware);

const bodyParser = express.json();
app.use(bodyParser);

app.use(productRouter);

const port = 4000;

app.listen(port, () => {
  console.log(`app listen on ${port}`);
});
