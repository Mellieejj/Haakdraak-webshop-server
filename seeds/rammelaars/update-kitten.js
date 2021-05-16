const Product = require("../../products/model");

async function rammelaar() {
  try {
    await Product.update(
      { stock: 0 },
      {
        where: { name: "Bijtring/Rammelaar Kitten" },
      }
    );
  } catch (error) {
    console.log(error);
  }
}

rammelaar();