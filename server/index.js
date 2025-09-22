const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const authRoutes = require("./Routes/AuthRoutes");

const app = express();
const PORT = 4000;

// Middleware
app.use(cors({
  origin: ["http://localhost:3000"],
  methods: ["GET", "POST"],
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/", authRoutes);

// Start server AFTER DB connects
mongoose.connect("mongodb://127.0.0.1:27017/jwt")
  .then(() => {
    console.log("DB Connection Successful");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.log("DB Connection Error:", err.message));
