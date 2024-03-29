const express = require("express");
const app = express();
const path = require("path");
const session = require('express-session')
const mustacheExpress = require("mustache-express");

const viewsPath = path.join(__dirname, "./views");
const bodyParser = require("body-parser");
const studentsRoute = require('./routes/students')


app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  // cookie: { secure: true }
}))

//Registering partials
// views/partials/fileName.mustache
app.engine("mustache", mustacheExpress(viewsPath + "/partials", ".mustache"));
app.set('views', viewsPath)
app.set("view engine", "mustache");

app.use(bodyParser.urlencoded({ extended: false })); //To parse URLs
app.use('/students', studentsRoute)

app.listen(3000, () => {
  console.log("Server is running.!");
});
