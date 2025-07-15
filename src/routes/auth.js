const { AuthCtrl } = require("../controllers");

const router = require("express").Router();

router.post("/register", AuthCtrl.register);
router.post("/login", AuthCtrl.login);

module.exports = router;
