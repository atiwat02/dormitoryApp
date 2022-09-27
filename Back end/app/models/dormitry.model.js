const sql = require("./db.js");

// constructor
const Dormitory = function(dormitory) {
  this.name = dormitory.name;
  
  
};

Dormitory.create = (newDormitory, result) => {
  sql.query("INSERT INTO dormitory SET ?", newDormitory, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created Dormitory: ", { id: res.insertId, ...newDormitory });
    result(null, { id: res.insertId, ...newDormitory });
  });
};
module.exports = Dormitory;