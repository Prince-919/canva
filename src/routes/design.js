const { DesignCtrl } = require("../controllers");
const { auth } = require("../middlewares");

const router = require("express").Router();

router.post("/create-design", auth, DesignCtrl.create);

module.exports = router;
