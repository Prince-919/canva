const { BackgroundModel } = require("../models");

class BackgroundCtrl {
  static getBacgroundImage = async (req, res) => {
    try {
      const images = await BackgroundModel.find({});
      return res.status(200).json({ images });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}
module.exports = BackgroundCtrl;
