const express = require("express");
const {
  createRoom,
  updateRoom,
  deleteRoom,
  getRoom,
  getRooms,
} = require("../controllers/room");

const { verifyAdmin } = require("../utils/verifytoken");

const router = express.Router();

// CREATE
router.post("/:hotelId", verifyAdmin, createRoom);
// UPDATE
router.put("/:id/", verifyAdmin, updateRoom);
// DELETE
router.delete("/:id/:hotelId", verifyAdmin, deleteRoom);
// GET
router.get("/:id", getRoom);
// GET ALL
router.get("/", getRooms);

module.exports = router;
