const { DesignImageCtrl } = require("../controllers");
const { auth } = require("../middlewares");

const router = require("express").Router();

router.get("/design-images", auth, DesignImageCtrl.getDesignImage);

module.exports = router;
