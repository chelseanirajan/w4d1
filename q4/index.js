const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.use("/css", express.static(path.join(__dirname, "styling")));
const products = [
  {
    id: 1,
    productName: "Shirt",
    description: "This is new bran.",
    price: "$25.00",
    image:
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/5898799b135648bcaf35ae28011c172b_9366/Ultraboost_DNA_5.0_Shoes_White_GV8740_01_standard.jpg",
  },
  {
    id: 2,
    productName: "Pant",
    description: "This is new arrival.",
    price: "$55.00",
    image:
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/5898799b135648bcaf35ae28011c172b_9366/Ultraboost_DNA_5.0_Shoes_White_GV8740_01_standard.jpg",
  },
  {
    id: 3,
    productName: "Shoes",
    description: "Bores brand are not expensive",
    price: "$5.00",
    image:
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/5898799b135648bcaf35ae28011c172b_9366/Ultraboost_DNA_5.0_Shoes_White_GV8740_01_standard.jpg",
  },
  {
    id: 4,
    productName: "Repo",
    description: "Main Repo shoes is good for all the time.",
    price: "$25.00",
    image:
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/5898799b135648bcaf35ae28011c172b_9366/Ultraboost_DNA_5.0_Shoes_White_GV8740_01_standard.jpg",
  },
];
app.get("/product", (req, res) => {
  res.render("product", { pageTitle: "Product", prods: products });
});

app.listen(3000);
