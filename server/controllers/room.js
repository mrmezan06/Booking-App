const Hotel = require("../models/Hotel");
const Room = require("../models/Room");

exports.createRoom = async (req, res, next) => {
  try {
    const { title, price, maxPeople, desc, roomNumbers } = req.body;
    const hotelId = req.params.hotelId;
    const room = await Room.create({
      title,
      price,
      maxPeople,
      desc,
      roomNumbers,
    });
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $push: { rooms: room._id },
      });
    } catch (error) {
      next(error);
    }
    res.status(201).json(room);
  } catch (err) {
    next(err);
  }
};

exports.updateRoom = async (req, res, next) => {
  try {
    const updatedRoom = await Room.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedRoom);
  } catch (error) {
    next(error);
  }
};
exports.deleteRoom = async (req, res, next) => {
  const hotelId = req.params.hotelId;
  try {
    await Room.findByIdAndDelete(req.params.id);
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $pull: { rooms: req.params.id },
      });
    } catch (error) {
      next(error);
    }
    res.status(200).json("Room has been deleted...");
  } catch (error) {
    next(error);
  }
};
exports.getRoom = async (req, res, next) => {
  try {
    const room = await Room.findById(req.params.id);
    res.status(200).json(room);
  } catch (error) {
    next(error);
  }
};
exports.getRooms = async (req, res, next) => {
  try {
    const rooms = await Room.find();
    res.status(200).json(rooms);
  } catch (error) {
    next(error);
  }
};

// 1.16:00
