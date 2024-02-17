const express = require("express");
const bodyParser = require("body-parser");
const app = express();

//Parser to parse json
app.use(bodyParser.json());

//get request
app.get("/", (req, res) => {
  res.send("Get Request");
});

app.get("/movies", (req, res) => {
  res.send("Movies");
});

//Params -- > All the request params will be there in req.params:{} object -- params: { genre: 'comed', year: '2332' },
app.get("/movies/:genre/:year", (req, res) => {
  res.send(
    `Movie with Year - ${req.params.year} and Genre - ${req.params.genre}`
  );
});

//Query Strings --> http://localhost:3000/movie?name=sachin

app.get("/movie", (req, res) => {
  res.send(`Name ${req.query.name}, Age ${req.query.age}`); //returns the query string parameters in an object
  console.log(req);
});

app.get("/moviesJson", (req, res) => {
  let moviesList = [
    {
      movieName: "Apthamitra",
      year: "2007",
      genre: "Horror",
    },
    {
      movieName: "Aptharakshaka",
      year: "2011",
      genre: "Horror",
    },
  ];
  res.json(moviesList);
});

//POST Request

app.post("/movies", (req, res) => {
  let title = req.body.title;
  res.send('Success..!')
});

app.listen(3000, () => {
  console.log("Server is running...!");
});
