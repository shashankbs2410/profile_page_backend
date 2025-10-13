const mongoose = require("mongoose");

const projectsSchema = new mongoose.Schema({
  _id: { $oid: { type: String, unique: true } },
  pk: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  link: { type: String, required: true },
  techstack: { type: [String], required: true },
  num: { type: String, required: true },
}, { collection : 'projects' });

module.exports = mongoose.model("Projects", projectsSchema);
