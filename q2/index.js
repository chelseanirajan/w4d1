const express = require("express");
const app = express();
const path = require("path");

app.use("/css", express.static(path.join(__dirname, "css")));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});
app.post("/result", (req, res) => {
  const obj = JSON.parse(JSON.stringify(req.body));
  http: res.redirect(`/output/:${obj.age}?name=${obj.name}`);
});
app.get("/output/:age", (req, res) => {
  let name = req.query.name;
  let age = req.params.age;
  res.send(`Welcome ${name} and your age is  ${age}`);
});

app.listen(6000);
