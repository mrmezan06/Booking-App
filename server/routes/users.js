const express = require("express");
const {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} = require("../controllers/user");
const { verifyUser, verifyAdmin } = require("../utils/verifytoken");
const router = express.Router();

// router.get("/checktoken", verifyToken, (req, res, next) => {
//   res.status(200).json({ message: "Token is valid" });
// });

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.status(200).json({ message: "You can delete or update this user" });
// });

// router.get("/checkadmin", verifyAdmin, (req, res, next) => {
//   res.status(200).json({ message: "You are an Admin" });
// });

// UPDATE
router.put("/:id", verifyUser, updateUser);
// DELETE
router.delete("/:id", verifyUser, deleteUser);
// GET
router.get("/:id", verifyUser, getUser);
// GET ALL
router.get("/", verifyAdmin, getUsers);

module.exports = router;
