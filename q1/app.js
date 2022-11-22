const express = require("express");
const app = express();
const path = require("path");
const cookieParser = require("cookie-parser");

app.set("view engine", "ejs");
app.use("/css", express.static(path.join(__dirname, "styling")));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get("/", (req, res) => {
  let cookieList = [];
  if (req.cookies.cookieList) {
    cookieList = req.cookies.cookieList;
  }
  res.render("index", { pageTitle: "Index", cok: cookieList });
});

app.post("/addCookie", (req, res) => {
  const obj = JSON.parse(JSON.stringify(req.body));
  let cookieList = [];
  if (req.cookies.cookieList) {
    cookieList = req.cookies.cookieList;
  }
  if (obj) {
    cookieList.push(obj);
    res.cookie("cookieList", cookieList);
  }
  res.render("index", { pageTitle: "tite", cok: cookieList });
});

app.listen(3000);
