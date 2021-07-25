const Product = require("../../products/model");
const Category = require("../../categories/model");
const ProductImage = require("../../productImages/model");

async function sleutel() {
  try {
    const category = await Category.findOne({
      where: { name: "Sleutelhangers" },
    });

    const sleutelLeeuw = await Product.create({
      name: "Sleutelhanger Leeuw ",
      price: "5.00",
      description:
        "Sleutelhanger leeuw gehaakt met katoengaren. De leeuw heeft een houten kraal als lijf. Ik maak gebruik van veiligheidsoogjes, deze bevestig ik ook goed aan de binnenkant.",
      size: "6cm",
      optional:
        "Musketonhaakje kan vervangen worden door een sleutelring. Veiligheidsoogjes kunnen vervangen worden door borduurde ^ ^ of | | oogjes.",
      stock: 1,
      categoryId: category.id,
    });

    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/sleutel-leeuw/sleutel-geluks-leeuw.jpg",
      thumbnail: true,
      productId: sleutelLeeuw.id,
    });

    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/sleutel-leeuw/sleutel-geluks-leeuw_size.jpg",
      thumbnail: false,
      productId: sleutelLeeuw.id,
    });

  } catch (error) {
    console.log(error);
  }
}

sleutel();
