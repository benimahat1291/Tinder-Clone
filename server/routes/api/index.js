const router = require("express").Router();
const tinderCardRoute = require("./tinderCards");

// Book routes
router.use("/tindercards", tinderCardRoute);

module.exports = router;
