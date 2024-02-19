const express = require("express");
const app = express();
const mustacheExpress = require("mustache-express");

//mustache -> File extension
app.engine("mustache", mustacheExpress());

app.set("view engine", "mustache");

//views -> folder name
app.set("views", __dirname + "/views");

//Static data
// app.get("/", (req, res) => {
//   res.render("index");
// });

//Dynamic data

let city = {
  cityName: "Bengaluru",
  address: {
    street: "JP Nagar",
    zipCode: "560258",
  },
};

app.get("/", (req, res) => {
  res.render("index",city);
});

//Dynamic data with array of objects
let students = [
  {
    regNo: "JS0001",
    branch: "CS",
    address: {
      street: "JP Nagar",
      zipCode: "560258",
    },
  },
  {
    regNo: "JS0002",
    branch: "EC",
    address: {
      street: "Vijay Nagar",
      zipCode: "562002",
    },
  },
];

//If no data exists. Forcing the arra to be blank to check
//students=[]
app.get("/students", (req, res) => {
  res.render("students", { studentsKey: students });
});

app.listen(3000, () => {
  console.log("Server is running....!");
});
