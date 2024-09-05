var nodejsmailer = require("nodemailer");
const dotenv = require("dotenv").config();

var mailOptions = {
  from: process.env.AUTH_MAIL,
  to: [process.env.RECEIPTENTS],
  subject: process.env.MAIL_SUBJECT,
  text: process.env.MAIL_TEXT,
  html: process.env.MAIL_HTML,
};

var transporter = nodejsmailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.AUTH_MAIL,
    pass: process.env.AUTH_PASS_KEY,
  },
});

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email Send " + info.response);
  }
});
