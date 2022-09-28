const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register a user

exports.register = async (req, res, next) => {
  const { username, email, password } = req.body;
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const user = await User.create({
      username,
      email,
      password: hash,
    });
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

// Login a user
exports.login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return next({
        status: 404,
        message: "Username not found",
      });
    }
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      return next({
        status: 400,
        message: "Wrong password",
      });
    }
    const token = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.SECRET
    );
    // Send without password
    const { password, isAdmin, ...otherDetails } = user.toObject();
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json({
        ...otherDetails,
      });
  } catch (error) {
    next(error);
  }
};

// 58:50
