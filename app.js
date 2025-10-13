// Load environment variables
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require('./dbConfig/db'); 

const contactRoute = require("./routes/contactRoute");
const projectsRoute = require("./routes/projectsRoute");

const corsOptions = {
  origin: "http://localhost:3000",
};

// Connect to database
connectDB();

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/contact-message", cors(corsOptions), contactRoute);
app.use("/projects",cors(corsOptions), projectsRoute);
app.use((req, res, next) => {
  res.status(404).send("404. Not found!");
});

app.listen(8080);
