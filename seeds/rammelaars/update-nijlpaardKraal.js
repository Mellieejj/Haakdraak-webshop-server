const ProductImage = require("../../productImages/model");

async function sleutel() {
  try {
  await ProductImage.update(
      {
        url: "https://www.haakdraak.nl/afbeeldingen/bijtring-kralen/kraal-nijlpaard_size.jpg",
      },
      {
        where: {
          url: "https://www.haakdraak.nl/afbeeldingen/bijtring-kralen/kraal-nijlpaard_size_.jpg",
        },
      }
    );
  } catch (e) {
    console.log(e);
  }
}
sleutel();