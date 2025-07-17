const { BackgroundCtrl } = require("../controllers");
const { auth } = require("../middlewares");

const router = require("express").Router();

router.get("/background-images", auth, BackgroundCtrl.getBacgroundImage);

module.exports = router;
