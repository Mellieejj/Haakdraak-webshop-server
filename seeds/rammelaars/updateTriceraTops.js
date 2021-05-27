const Product = require("../../products/model");
const ProductImage = require("../../productImages/model");

async function rammelaar() {
  try {
   const tricera = await Product.findOne(
      {
        where: { name: "Bijtring/Rammelaar Triceratops" },
      }
    );

    ProductImage.create({
      url: "https://www.haakdraak.nl/afbeeldingen/bijtring-triceratops/bijt-triceratops_size1.jpg",
      thumbnail: false,
      productId: tricera.id,
    });

  } catch (error) {
    console.log(error);
  }
}

rammelaar();
