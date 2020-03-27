const { Router } = require("express");
const Order = require("../orders/model");
// const Product = require("../products/model")

const router = Router();

router.post("/orders", async (request, response, next) => {
  try {
    const newOrder = {
      firstName: request.body.form.firstName,
      lastName: request.body.form.lastName,
      email: request.body.form.email,
      street: request.body.form.street,
      housenr: request.body.form.housenr,
      postcode: request.body.form.postcode,
      city: request.body.form.city,
      opmerkingen: request.body.form.opmerkingen
    };
    const order = await Order.create(newOrder);

    console.log(request.body.items);

    // response.send(request.body.items.map(item => order.addProduct(item.id)));
    response.send(
      request.body.items.map(item =>
        order.addProduct(item.id, { through: { quantity: item.quantity } })
      )
    );

    // need items id & quantity per item(this one is only created at front end)
  } catch (error) {
    next(error);
  }
});

module.exports = router;
