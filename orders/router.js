const { Router } = require("express");
const Order = require("../orders/model");
const OrderProducts = require("../orderProducts/model");
const Product = require("../products/model");
// const Product = require("../products/model")

const router = Router();

router.post("/orders", async (request, response, next) => {
  try {
    const {
      firstName,
      lastName,
      email,
      street,
      housenr,
      postcode,
      city,
      opmerkingen,
    } = request.body.form;

    if (
      request.body.items.length === 0 &&
      (!firstName ||
        !lastName ||
        !email ||
        !street ||
        !housenr ||
        !postcode ||
        !city)
    ) {
      return response.status(400).send({
        message:
          "Winkelwagen is leeg & het formulier is niet volledig ingevuld.",
      });
    } else if (request.body.items.length === 0) {
      return response.status(400).send({
        message: "Winkelwagen is leeg!",
      });
    } else if (
      !firstName ||
      !lastName ||
      !email ||
      !street ||
      !housenr ||
      !postcode ||
      !city
    ) {
      return response.status(400).send({
        message: "Formulier was niet volledig ingevuld",
      });
    } else {
      const newOrder = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        street: street,
        housenr: housenr,
        postcode: postcode,
        city: city,
        opmerkingen: opmerkingen,
      };
      const order = await Order.create(newOrder);

      // console.log(request.body.items);
      response.status(200).send(
        request.body.items.map((item) =>
          order.addProduct(item.id, {
            through: { quantity: item.quantity },
          })
        )
      );
    }
  } catch (error) {
    response.status(500).send({
      message: "U heeft niet alle gegevens ingevuld.",
    });
    // next(error);
  }
});

router.get("/orders", (request, response, next) => {
  Order.findAll({ include: [Product] })
    .then((order) => response.json(order))
    .catch(next);
});

router.get("/orders/:orderId", async (request, response, next) => {
  try {
    const order = await Order.findByPk(request.params.orderId, {
      include: [Product],
    });
    return response.send(order);
  } catch (error) {
    console.error(error);
  }
});

// router.get("/orders/:orderId", async (request, response, next) => {
//   try {
//     const list = await OrderProducts.findAll({
//       where: { orderId: request.params.orderId },
//     });

//     return response.send(list);
//   } catch (error) {
//     console.error(error);
//   }
// });

module.exports = router;
