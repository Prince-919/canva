const formidable = require("formidable");
const { ImageModel } = require("../models");
const { cloudinary } = require("../config");
const {
  mongo: { ObjectId },
} = require("mongoose");

class ImageCtrl {
  static addImage = async (req, res) => {
    const form = new formidable.IncomingForm();
    const { _id } = req.userInfo;
    try {
      const [_, files] = await form.parse(req);
      const { image } = files;
      const { secure_url } = await cloudinary.uploader.upload(
        image[0].filepath
      );
      const userImage = await ImageModel.create({
        userId: _id,
        imageUrl: secure_url,
      });
      return res.status(201).json({ userImage });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  static getImage = async (req, res) => {
    const { _id } = req.userInfo;
    try {
      const images = await ImageModel.find({ userId: new ObjectId(_id) });
      return res.status(200).json({ images });
    } catch (error) {
      return res.status(200).json({ message: error.message });
    }
  };
}
module.exports = ImageCtrl;
