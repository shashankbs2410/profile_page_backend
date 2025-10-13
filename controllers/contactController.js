const contactMessage = require("../models/contactMessage");

module.exports.postContactmessage = (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const mobile = req.body.mobile;
  const text = req.body.text;
  const payload = new contactMessage(name, email, mobile, text);
  let status;
  let statusCode;

  fetch(`https://script.google.com/macros/s/${process.env.MESSAGE_KEY}/exec`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams(payload).toString(),
  }).then((response) => {
    statusCode = response.status;
    status = response.status === 200 ? "Success" : "Failed";

    res.status(statusCode).send(JSON.stringify({ writeStatus: status }));
  });
};
