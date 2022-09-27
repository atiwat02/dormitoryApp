const Parcels = require("../models/parcels.model.js");


// Create and Save a new Users
exports.create = (req, res) => {

  console.log(req.body)
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Tutorial
  const parcels = new Parcels({
    name: req.body.name,
    parcel_number: req.body.parcel_number,
    company: req.body.company,
    room_number: req.body.room_number,
    // day: req.body.day,
    // time: req.body.time,
    recipient: req.body.recipient,


  });

  // Save Users in the database
  Parcels.create(parcels, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Parcels."
      });
    else res.send(data);
  });
};
exports.parcelall = (req, res) => {

  Parcels.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    else res.send(data);
  });
};

exports.parcelall2 = (req, res) => {

  Parcels.getAllby((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    else res.send(data);
  });
};

exports.update = (req, res) => {
  console.log(req.file.filename)
  console.log(req.body.id)
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  Parcels.updateup_day(
    req.body.id,
    req.file.filename,
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Parcels with id ${req.body.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Parcels with id " + req.body.id
          });
        }
      } else res.send(data);
    }
  );
};

exports.findOne = (req, res) => {
  Parcels.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found  ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving  " + req.params.id
        });
      }
    } else res.send(data);
  });
};

