const router = require("express").Router();
const Controller = require("../../controllers/Controller");

// Matches with "/api/books"
router.route("/")
  .get(Controller.findAll)


module.exports = router;
