const { DesignCtrl } = require("../controllers");
const { auth } = require("../middlewares");

const router = require("express").Router();

router.post("/create-design", auth, DesignCtrl.create);
router.get("/design/:design_id", auth, DesignCtrl.getDesign);
router.put("/update-design/:design_id", auth, DesignCtrl.update);
router.get("/designs", auth, DesignCtrl.getDesigns);
router.delete("/delete-image/:design_id", auth, DesignCtrl.deleteDesign);

module.exports = router;
