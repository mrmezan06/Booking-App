const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");
const roomsRoute = require("./routes/rooms");
const hotelsRoute = require("./routes/hotels");
const cookieParser = require("cookie-parser");

dotenv.config();
const app = express();

app.listen(process.env.PORT, async () => {
  console.log(`Server listening on ${process.env.PORT}`);
  try {
    mongoose.connect(process.env.MONGO, () => {
      console.log("MongoDB connected");
    });
  } catch (error) {
    console.log(error);
  }
});

// Middlewares
app.use(cookieParser());
app.use(express.json());

// Completed
app.use("/api/hotels", hotelsRoute);
// Todo: add the other routes here
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/rooms", roomsRoute);

// Error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    success: false,
    status: err.status || 500,
    message: err.message || "Internal Server Error",
    stack: err.stack,
  });
});
// Time: 31:30 Minutes
