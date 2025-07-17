const { ImageCtrl } = require("../controllers");
const { auth } = require("../middlewares");

const router = require("express").Router();

router.post("/add-image", auth, ImageCtrl.addImage);
router.get("/get-image", auth, ImageCtrl.getImage);

module.exports = router;
