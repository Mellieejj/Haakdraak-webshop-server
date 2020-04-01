const express = require("express");
const productRouter = require("./products/router");
const orderRouter = require("./orders/router")
const cors = require("cors");

const app = express();

const corsMiddleware = cors();
app.use(corsMiddleware);

const bodyParser = express.json();
app.use(bodyParser);

app.use(productRouter);
app.use(orderRouter)

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`app listen on ${port}`);
});
