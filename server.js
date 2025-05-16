// server.js
// dotenv.config();
require("dotenv").config();
const express = require("express");
// const mongoose = require("mongoose");
const dotenv = require("dotenv");
const flashcardRoutes = require("./routes/flashcards");

const app = express();
app.use(express.json());

const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));
app.use("/", flashcardRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
