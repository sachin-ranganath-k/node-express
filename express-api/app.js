const express = require("express");
const app = express();

app.use(log); //Instead of passing 2nd parameter in app.get(), we can use like this. This will apply to all routes

//Middleware
function log(req, res, next) {
  console.log("Log 1");
  console.log("Log 2");
  console.log("Log 3");

  next(); //Tells to execute next request else  it will stop here and not go further
}

app.get("/", log, (req, res) => {
  res.send("Root Route");
});

app.get("/students", log, (req, res) => {
  res.send("Students Route");
});

app.listen(3000, () => {
  console.log("Server is running...!");
});
