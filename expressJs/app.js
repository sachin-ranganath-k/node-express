const express = require("express");
const app = express();

//get request
app.get("/", (req, res) => {
  res.send("Get Request");
});

app.get("/movies", (req, res) => {
  res.send("Movies");
});

//All the request params will be there in req.params:{} object -- params: { genre: 'comed', year: '2332' },
app.get("/movies/:genre/:year", (req, res) => {
  res.send(
    `Movie with Year - ${req.params.year} and Genre - ${req.params.genre}`
  );
});

app.listen(3000, () => {
  console.log("Server is running...!");
});

/*Output
Hello...
Server is running...!
*/
