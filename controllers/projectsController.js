const Projects = require("../models/project");

module.exports.getprojects = async (req, res, next) => {
  try {
    const data = await Projects.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
