const { UserModel } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { config } = require("../config");

class AuthCtrl {
  static register = async (req, res) => {
    let { name, email, password } = req.body;
    try {
      const getUser = await UserModel.findOne({ email }).select("+password");
      if (getUser) {
        return res
          .status(404)
          .json({ message: `This ${getUser.email} is already registered.` });
      } else {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await UserModel.create({
          name,
          email,
          password: hashedPassword,
        });
        const token = await jwt.sign(
          {
            _id: user.id,
            name: user.name,
            email: user.email,
          },
          config.get("jwtSecret"),
          { expiresIn: "2d" }
        );
        return res
          .status(201)
          .json({ message: "User registered successful.", token });
      }
    } catch (error) {
      console.log(error.message);
      return res.status(500).json({ message: "Internal server error." });
    }
  };
  static login = async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await UserModel.findOne({ email }).select("+password");
      if (user) {
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
          const token = await jwt.sign(
            {
              _id: user.id,
              name: user.name,
              email: user.email,
            },
            config.get("jwtSecret"),
            { expiresIn: "2d" }
          );
          return res
            .status(200)
            .json({ message: "Logged in successful.", token });
        } else {
          return res
            .status(404)
            .json({ message: "Email or password is incorrect." });
        }
      } else {
        return res
          .status(404)
          .json({ message: "Email or password is incorrect." });
      }
    } catch (error) {
      console.log(error.message);
      return res.status(500).json({ message: "Internal server error." });
    }
  };
}

module.exports = AuthCtrl;
