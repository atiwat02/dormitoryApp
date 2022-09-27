const Dormitory = require("../models/dormitry.model.js");

// Create and Save a new Users
exports.create = (req, res) => {

  console.log("aaaaaaaaaaa")
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Tutorial
  const dormitory = new Dormitory({
    name: req.body.name,
    

  });

  // Save Users in the database
  Dormitory.create(dormitory, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Dormitory."
      });
    else res.send(data);
  });
};
