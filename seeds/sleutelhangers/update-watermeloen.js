const ProductImage = require("../../productImages/model");

async function sleutel() {
  try {
  await ProductImage.update(
      {
        url: "https://haakdraak.nl/afbeeldingen/sleutel-fruit/sleutel-watermeloen_size.jpg",
      },
      {
        where: {
          url: "https://haakdraak.nl/afbeeldingen/sleutel-fruit/sleutel-meloen_size.jpg",
        },
      }
    );
  } catch (e) {
    console.log(e);
  }
}
sleutel();
