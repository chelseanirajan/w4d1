const { json } = require("body-parser");
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
const cartItems = [];
app.get("/", (req, res) => {
  res.render("product", { pageTitle: "Product", prods: products });
});
app.post("/addToCart/:id", (req, res) => {
  const id = +req.params.id;
  const item = products.find((pro) => pro.id === id);
  cartItems.push(item);
  console.log(cartItems);
  res.render("user-cart", { pageTitle: "My Item", items: cartItems });
});
app.get("/cart", (req, res) => {
  let cart = {};
  if (req.session.cart) {
    cart = req.session.cart;
  }
  res.render("cart", { pageTitle: "my Title", cart: cart });
});
app.post("/addToCart", (req, res) => {
  const cart = JSON.parse(JSON.stringify(req.obj));
  req.session.cart = cart;
  res.redirect("/cart");
});
app.use((req, res) => {
  res.status(404).render("404", { pageTitle: "Page Not Found" });
});

app.listen(3000);
