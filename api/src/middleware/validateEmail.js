const nodemailer = require('nodemailer');
const UI_URL = 'https://localhost:3050' || process.env.UI_URL;
const User = require('../User.model.js');

const sendEmail = (userEmail, username) => {
  // Set STMP gmail service
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'cookingthecode@gmail.com',
      pass: 'cookingthecode123'
    }
  });
  // Set email information
  const mailOptions = {
    from: 'cookingthecode@gmail.com',
    to: userEmail,
    subject: 'Welcome to Come to The Table!',
    html:`<h2>Thanks for signing up, ${username}</h2>
          <p>Please verify your email address to start planning your meals today. Thank you!</p>
          <br/>
          <a href='${UI_URL}/?email=${userEmail}'/>Verify Email Now</a>`
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