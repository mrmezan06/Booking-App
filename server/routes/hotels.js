const express = require("express");
const {
  createHotel,
  updateHotel,
  deleteHotel,
  getHotel,
  getHotels,
  countByCity,
} = require("../controllers/hotel");
const { verifyAdmin } = require("../utils/verifytoken");
const router = express.Router();

// CREATE
router.post("/", verifyAdmin, createHotel);
// UPDATE
router.put("/:id", verifyAdmin, updateHotel);
// DELETE
router.delete("/:id", verifyAdmin, deleteHotel);
// GET
router.get("/find/:id", getHotel);
// GET ALL
router.get("/", getHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", getHotels);

module.exports = router;
