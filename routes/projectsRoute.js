const express = require("express");
const projectsController = require("../controllers/projectsController");

const projectsRoute = express.Router();

projectsRoute.get("/", projectsController.getprojects);

module.exports = projectsRoute;
