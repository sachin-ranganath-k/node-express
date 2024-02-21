const express = require("express");
const router = express.Router();

//localhost:3000/students (mentioned in app.js)
// router.get("/", (req, res) => {
//   let city = {
//     cityName: "Bengaluru",
//     address: {
//       street: "JP Nagar",
//       zipCode: "560258",
//     },
//   };
//   res.render("index", city);
// });

router.get("/", (req, res) => {
  let city = {
    studName: req.session.studentName,
    studAge: req.session.studentAge     
  };
  res.render("index", city);
});

// localhost:3000/students/add-student
router.get("/add-student", (req, res) => {
  res.render("add-student");
});

router.post("/add-student", (req, res) => {
  let studName = req.body.studentName;
  let studAge = req.body.studentAge;

  if (req.session) {
    req.session.studentName = studName;
    req.session.studentAge = studAge;
  }
  console.log(studName);
  console.log(studAge);
  res.status(200).send();
});

module.exports = router;
