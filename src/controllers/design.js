const formidable = require("formidable");
const { cloudinary } = require("../config");
const { DesignModel } = require("../models");

class DesignCtrl {
  static create = async (req, res) => {
    const form = new formidable.IncomingForm();
    console.log(form);
    const { _id } = req.userInfo;
    try {
      const [fields, files] = await form.parse(req);
      const { image } = files;
      const { url } = await cloudinary.uploader.upload(image[0].filepath);
      const design = await DesignModel.create({
        userId: _id,
        components: [JSON.parse(fields.design[0])],
        imageUrl: url,
      });
      return res.status(201).json({ design });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  static getDesign = async (req, res) => {
    const { design_id } = req.params;
    try {
      const design = await DesignModel.findById(design_id);
      return res.status(200).json({ design: design.components });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}
module.exports = DesignCtrl;
