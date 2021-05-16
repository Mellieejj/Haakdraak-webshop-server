const Product = require("../../products/model");
const Category = require("../../categories/model");
const ProductImage = require("../../productImages/model");

async function knuffel() {
  try {
    const knuffels = await Category.findOne({
      where: { name: "Knuffels" },
    });
    
    const knufKira = await Product.create({
      name: "Zacht Konijn",
      price: "25.00",
      description:
        "Knuffel konijn, zachte knuffel om heerlijk mee te knuffelen. Dit konijn is gemaakt van zacht knuffelgaren. Zittend is dit konijn ongeveer 35cm groot, liggend is hij ongeveer 40cm. Ik maak gebruik van veiligheidsoogjes deze bevestig ik ook goed aan de binnenkant. Dit konijn kan ik ook in een kleiner formaat maken, dan is hij zitten ongeveer 15cm. Als je de kleinere variant wilt vermeld dit even in de opmerkingen bij je bestelling.",
      size: "35cm",
      optional:
        "Veiligheidsoogjes kunnen vervangen worden door borduurde slapende oogjes.",
      stock: 0,
      categoryId: knuffels.id,
    });

    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/knuf-kira/knuf-kira.jpg",
      thumbnail: true,
      productId: knufKira.id,
    });

    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/knuf-kira/knuf-kira_size.jpg",
      thumbnail: false,
      productId: knufKira.id,
    });
    
    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/knuf-kira/knuf-kira_size1.jpg",
      thumbnail: false,
      productId: knufKira.id,
    });
  } catch (error) {
    console.log(error);
  }
}

knuffel();
