const { DesignImageModel } = require("../models");

class DesignImageCtrl {
  static getDesignImage = async (req, res) => {
    try {
      const images = await DesignImageModel.find({});
      return res.status(200).json({ images });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}
module.exports = DesignImageCtrl;
