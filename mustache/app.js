const express = require("express");
const app = express();
const mustacheExpress = require("mustache-express");

//mustache -> File extension
app.engine("mustache", mustacheExpress());

app.set("view engine", "mustache");

//views -> folder name
app.set("views", __dirname + '/views');

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(3000, () => {
  console.log("Server is running....!");
});
