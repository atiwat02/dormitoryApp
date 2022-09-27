module.exports = app => {
  const parcels = require("../controllers/parcels.controller.js");
  const multer = require('multer')

  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./uploads")
    },
    filename: function (req, file, cb) {

      cb(null, file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })

  var router = require("express").Router();
  app.use('/api/parcels', router);
  // Create a new Tutorial
  router.post("/create", parcels.create);

  router.get("/parcel", parcels.parcelall);

  router.get("/parcel2", parcels.parcelall2);

  router.post('/upday',upload.single("file"), parcels.update);

  router.get("/:id",  parcels.findOne);



};
