const mongoose = require("mongoose");

const SurveyResponseSchema = new mongoose.Schema({
  satisfaction: { type: Number },
  recommendation: { type: Number },
  priority: { type: String },
  featurePriority: [{ type: String }],
  feedback: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("SurveyResponse", SurveyResponseSchema);
