const router = require("express").Router();
let Student = require("../models/studentSchema");

router.route("/").get(async (req, res) => {

  const name = "Bryan Rodriguez Penagos";
  const sid = "300369955";
  // create a new Student object
  const newStudent = new Student({
    name,
    sid,
  });

  // save the new object (newBook)
  newStudent
    .save()
    .then(() => res.json("Student added!"))
    .catch((err) => res.status(400).json("Error: " + err)); 
});

module.exports = router;
