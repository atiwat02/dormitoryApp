const sql = require("./db.js");

// constructor
const Parcels = function (parcels) {
  this.name = parcels.name;
  this.parcel_number = parcels.parcel_number;
  this.company = parcels.company;
  this.room_number = parcels.room_number;
  // this.imge = parcels.imge;
  // this.Day = parcels.day;
  // this.time = parcels.time;
  this.recipient = parcels.recipient;
  this.status = false;


};

Parcels.create = (newParcels, result) => {
  sql.query("INSERT INTO Parcel SET ?", newParcels, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created Parcels: ", { id: res.insertId, ...newParcels });
    result(null, { id: res.insertId, ...newParcels });
  });
};
Parcels.getAll = (result) => {
  let query = "SELECT * FROM Parcel WHERE status = true ";

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Parcels: ", res);
    result(null, res);
  });
};

Parcels.getAllby= (result) => {
  let query = "SELECT * FROM Parcel WHERE status = false ";

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Parcels: ", res);
    result(null, res);
  });
};


Parcels.updateup_day = ( id, data, result) => {
  var d = new Date();
  sql.query(
    "UPDATE Parcel SET status = true, imge = ?, up_day = ? WHERE id = ?",
    [data,d.toISOString().slice(0, 10)+" "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds(),id ],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Tutorial with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated data: ", { id: id, ...data });
      result(null, { id: id, ...data });
    }
  );
};

Parcels.findById = (id, result) => {
  sql.query(`SELECT * FROM Parcel WHERE room_number = ?`,id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found tutorial: ", res[0]);
      result(null, res);
      return;
    }

    // not found Tutorial with the id
    result({ kind: "not_found" }, null);
  });
};

module.exports = Parcels;

