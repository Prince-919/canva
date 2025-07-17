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
  static update = async (req, res) => {
    const form = new formidable.IncomingForm();
    const { design_id } = req.params;
    try {
      const [fields, files] = await form.parse(req);
      const { image } = files;
      const components = JSON.parse(fields.design[0]).design;
      const old_design = await DesignModel.findById(design_id);
      if (old_design) {
        if (old_design.imageUrl) {
          const splitImage = old_design.imageUrl.split("/");
          const imageFile = splitImage[splitImage.length - 1];
          const imageName = imageFile.split(".")[0];
          await cloudinary.uploader.destroy(imageName);
        }
        const { url } = await cloudinary.uploader.upload(image[0].filepath);
        await DesignModel.findByIdAndUpdate(design_id, {
          imageUrl: url,
          components,
        });
        return res.status(200).json({ message: "Save successful." });
      } else {
        return res.status(404).json({ message: "Design not found." });
      }
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}
module.exports = DesignCtrl;
