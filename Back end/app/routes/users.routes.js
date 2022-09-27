module.exports = app => {
    const users = require("../controllers/users.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/create", users.create);
    router.post("/update/:id", users.update);
    router.get("/delete/:id", users.delete);
    router.post("/login", users.login);
    router.get("/user", users.userall);


    app.use('/api/users', router);

  };
  