const jwt = require("jsonwebtoken");
const { createError } = require("../utils/error");

exports.verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(createError(401, "You are not authorized"));
  }
  try {
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
      if (err) {
        return next(createError(401, "Token is not valid"));
      }
      req.user = decoded;
      next();
    });
  } catch (error) {
    next(createError(401, "You are not authorized"));
  }
};

exports.verifyUser = (req, res, next) => {
  this.verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "You are not allowed to do that!"));
    }
  });
};
exports.verifyAdmin = (req, res, next) => {
  this.verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "You are not allowed to do that!"));
    }
  });
};
