const express = require("express");
const app = express();
const path = require("path");
const session = require("express-session");

app.use("/css", express.static(path.join(__dirname, "css")));
app.use(express.urlencoded({ extended: false }));
app.use(
  session({ secret: "My Scecret", resave: false, saveUninitialized: false })
);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});
app.post("/result", (req, res) => {
  const obj = JSON.parse(JSON.stringify(req.body));
  req.session.user = obj;
  console.log("obj", obj);
  // http: res.redirect(`/output/:${obj.age}?name=${obj.name}`);
  http: res.redirect(`/output`);
});
app.get("/output", (req, res) => {
  let obj = {};
  console.log(req.session.user);
  if (req.session.user) {
    obj = req.session.user;
  }
  // let name = req.query.name;
  // let age = req.params.age;
  // res.send(`Welcome ${name} and your age is  ${age}`);
  res.send(`Welcome ${obj.name} and your age is  ${obj.age}`);
});

app.listen(3000);
