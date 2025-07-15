const { AuthCtrl } = require("../controllers");

const router = require("express").Router();

router.post("/register", AuthCtrl.register);

module.exports = router;
