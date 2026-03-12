const mongoose = require('mongoose');

const WorkSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String }, // URL or path
  technologies: { type: [String], default: [] },
  projectLink: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Work', WorkSchema);
