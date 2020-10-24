const nodemailer = require('nodemailer');
const API_URL = process.env.API_URL || 'http://localhost:5000';
const SMTP_EMAIL = process.env.SMTP_EMAIL;
const SMTP_PASSWORD = process.env.SMTP_PASSWORD;
const User = require('../User.model.js');

const sendEmail = (userEmail) => {
  // Set STMP gmail service
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    }
  });
  // Set email information
  const mailOptions = {
    from: 'cookingthecode@gmail.com',
    to: userEmail,
    subject: 'Welcome to Come to The Table!',
    html:`<h2>Thanks for signing up!!</h2>
          <p>Please verify your account to start planning your meals today. Thank you!</p>
          <p>After you click the link you may then log in!</p>
          <a href='${API_URL}/verify/?email=${userEmail}'>Verify Email Now</a>
          `
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};
// Returns updated as promize
const validateEmail = (email) => {
  return User
  .findOneAndUpdate({
    email
  }, {validated: true}, {'new': true})
    .exec();
};

module.exports = {
  sendEmail,
  validateEmail
};