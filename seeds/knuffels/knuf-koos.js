const Product = require("../../products/model");
const Category = require("../../categories/model");
const ProductImage = require("../../productImages/model");

async function knuffel() {
  try {
    const knuffels = await Category.findOne({
      where: { name: "Knuffels" },
    });
    
    const knufKoos = await Product.create({
      name: "Zachte Krokodil",
      price: "17.50",
      description:
        "Knuffel krokodil, zachte knuffel om heerlijk mee te knuffelen. Deze krokodil is gemaakt van zacht knuffelgaren en een mix van acryl- en katoengaren. Zittend is deze krokodil ongeveer 25cm groot. Ik maak gebruik van veiligheidsoogjes deze bevestig ik ook goed aan de binnenkant.",
      size: "22cm",
      optional:
        "Veiligheidsoogjes kunnen vervangen worden door borduurde slapende oogjes.",
      stock: 0,
      categoryId: knuffels.id,
    });

    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/knuf-koos/knuf-koos.jpg",
      thumbnail: true,
      productId: knufKoos.id,
    });

    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/knuf-koos/knuf-koos_size.jpg",
      thumbnail: false,
      productId: knufKoos.id,
    });
    
    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/knuf-koos/knuf-koos_size1.jpg",
      thumbnail: false,
      productId: knufKoos.id,
    });

  } catch (error) {
    console.log(error);
  }
}

knuffel();
