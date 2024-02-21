const express = require("express");
const router = express.Router();


//localhost:3000/students (mentioned in app.js)
router.get("/", (req, res) => {
  let city = {
    cityName: "Bengaluru",
    address: {
      street: "JP Nagar",
      zipCode: "560258",
    },
  };

  res.render("index", city);
});

module.exports = router;
