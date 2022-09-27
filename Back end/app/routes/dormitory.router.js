module.exports = app => {
    const dormitory = require("../controllers/dormitory.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/create", dormitory.create);
    

    app.use('/api/dormitory', router);

  };
  