const Product = require("../../products/model");
const Category = require("../../categories/model");
const ProductImage = require("../../productImages/model");

async function overige() {
  try {
    const category = await Category.findOne({
      where: { name: "Baby Overige" },
    });

    const kubusKrokodil = await Product.create({
      name: "Speelkubus Krokodil",
      price: "35.00",
      description:
        "Aan deze speelkubus kunnen de kleintjes heel veel ontdekken. Er zitten verschillende geluiden in, rammeltjes in zijn voetjes, piepertje in zijn staart en een knisperde bek. Genoeg te ontdenken met de ringen aan de zijkanten en in zijn mond, het kralen 'handvat' en de zwemband. Ik maak gebruik van veiligheidsoogjes deze bevestig ik goed. De kubus zelf is 10x10 cm, de krokodil is ongeveer 15cm groot.",
      size: "15cm",
      optional:
        "Veiligheidsoogjes kunnen vervangen worden door slapende geborduurde oogjes. De plastic bijtringen kunnen in andere kleuren. De kubus kan in verschillende kleuren gehaakt worden. Als je andere kleuren wilt laat dit dan even weten.",
      stock: 0,
      categoryId: category.id,
    });

    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/kubus-krokodil/kubus-krokodil.jpg",
      thumbnail: true,
      productId: kubusKrokodil.id,
    });

    ProductImage.create({
      url: "https://www.haakdraak.nl/afbeeldingen/kubus-krokodil/kubus-krokodil_size.jpg",
      thumbnail: false,
      productId: kubusKrokodil.id,
    });

    ProductImage.create({
      url: "https://www.haakdraak.nl/afbeeldingen/kubus-krokodil/kubus-krokodil_size1.jpg",
      thumbnail: false,
      productId: kubusKrokodil.id,
    });

    ProductImage.create({
      url: "https://www.haakdraak.nl/afbeeldingen/kubus-krokodil/kubus-krokodil_size2.jpg",
      thumbnail: false,
      productId: kubusKrokodil.id,
    });

    ProductImage.create({
      url: "https://www.haakdraak.nl/afbeeldingen/kubus-krokodil/kubus-krokodil_size3.jpg",
      thumbnail: false,
      productId: kubusKrokodil.id,
    });

    ProductImage.create({
      url: "https://www.haakdraak.nl/afbeeldingen/kubus-krokodil/kubus-krokodil_size4.jpg",
      thumbnail: false,
      productId: kubusKrokodil.id,
    });
  } catch (e) {
    console.log(e);
  }
}

overige();
