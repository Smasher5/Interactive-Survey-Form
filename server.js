require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
const SurveyResponse = require("./models/SurveyResponse");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static("public")); // serve frontend files

// Connect DB
connectDB();

// Routes
app.post("/api/survey", async (req, res) => {
  try {
    const newResponse = new SurveyResponse(req.body);
    await newResponse.save();
    res.json({ success: true, message: "Response saved!" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.get("/api/survey", async (req, res) => {
  try {
    const responses = await SurveyResponse.find();
    res.json(responses);
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
