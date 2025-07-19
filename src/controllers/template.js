const { TemplateModel, DesignModel } = require("../models");

class TemplateCtrl {
  static getTemplates = async (req, res) => {
    try {
      const templates = await TemplateModel.find({}).sort({ createdAt: -1 });
      return res.status(200).json({ templates });
    } catch (error) {
      return res.status(200).json({ message: error.message });
    }
  };
  static addTemplate = async (req, res) => {
    const { template_id } = req.params;
    const { _id } = req.userInfo;
    try {
      const templates = await TemplateModel.findById(template_id);
      const design = await DesignModel.create({
        userId: _id,
        components: templates.components,
        imageUrl: templates.imageUrl,
      });

      return res.status(200).json({ design });
    } catch (error) {
      return res.status(200).json({ message: error.message });
    }
  };
}
module.exports = TemplateCtrl;
