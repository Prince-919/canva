const { DesignCtrl } = require("../controllers");
const { auth } = require("../middlewares");

const router = require("express").Router();

router.post("/create-design", auth, DesignCtrl.create);
router.get("/design/:design_id", auth, DesignCtrl.getDesign);

module.exports = router;
