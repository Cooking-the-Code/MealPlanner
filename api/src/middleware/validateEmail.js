const nodemailer = require('nodemailer');

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
          <a href='https://google.com/?email=${userEmail}'/>Verify Email Now</a>
          `
  }

  // Return sendEmail as promise
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
    console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};

const validateEmail = (user) => {

};

module.exports = {
  sendEmail,
  validateEmail
};