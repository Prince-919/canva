const { TemplateCtrl } = require("../controllers");
const { auth } = require("../middlewares");

const router = require("express").Router();

router.get("/templates", auth, TemplateCtrl.getTemplates);
router.get("/add-template/:template_id", auth, TemplateCtrl.addTemplate);

module.exports = router;
