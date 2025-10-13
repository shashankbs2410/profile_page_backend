const express = require("express");

const contactController = require("../controllers/contactController");

const contactRoute = express.Router();

contactRoute.post("/", contactController.postContactmessage);

module.exports = contactRoute;
