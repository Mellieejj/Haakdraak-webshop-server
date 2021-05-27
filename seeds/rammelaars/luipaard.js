const Product = require("../../products/model");
const Category = require("../../categories/model");
const ProductImage = require("../../productImages/model");

async function rattle() {
  try {
    const category = await Category.findOne({
      where: { name: "Bijtringen & Rammelaars" },
    });

    const luipaard = await Product.create({
      name: "Bijtring/Rammelaar Luipaard",
      price: "12.50",
      description:
        "Houten bijtring van een luipaard met een rammelkraal erin. Deze luipaard is gemaakt van katoengaren. Ik maak gebruik van veiligheidsoogjes, deze bevestig ik ook goed aan de binnenkant.",
      size: "12cm",
      optional:
        "Zonder geluid is natuurlijk ook mogelijk. De oogjes kunnen vervangen worden door geborduurde slapende oogjes.",
      stock: 1,
      categoryId: category.id,
    });

    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/bijtring-luipaard/bijt-luipaard.jpg",
      thumbnail: true,
      productId: luipaard.id,
    });

    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/bijtring-luipaard/bijt-luipaard_size.jpg",
      thumbnail: false,
      productId: luipaard.id,
    });

  } catch (error) {
    console.log(error);
  }
}

rattle();