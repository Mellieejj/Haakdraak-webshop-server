const Product = require("../../products/model");
const Category = require("../../categories/model");
const ProductImage = require("../../productImages/model");

async function lappenpop() {
  try {
     await ProductImage.update(
      { url: "https://www.haakdraak.nl/afbeeldingen/lappenpop/mini-pinguin/lap-mini-pinguin.jpg" },
      {
        where: { url: "https://haakdraak.nl/afbeeldingen/lappenpop/mini-pinguin/lap-mini-pinguin.jpg" },
      }
    ); 
    
  } catch (error) {
    console.log(error);
  }
}

lappenpop();
