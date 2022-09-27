const User = require("../models/User");
const bcrypt = require("bcryptjs");

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
