const Projects = require("../models/project");

module.exports.getprojects = async (req, res, next) => {
  try {
    const data = await Projects.find();
    res.json(data);
    console.log(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
