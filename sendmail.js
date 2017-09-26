var nodemailer = require('nodemailer');
var xoauth2 = require('xoauth2');


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
      type:'OAuth2',
      user:'adarsh95.ab@gmail.com',
      clientId: '864851092369-4ti4k7jbtuj28hqijht60v9npd3q5gqa.apps.googleusercontent.com',
      clientSecret: 'X2YyEq1NChvSqKNmlj5opLEa',
      refreshToken: '1/n6H5mO8QzmTL58DJ-VIkfq1Gi7YIh80hLGuRUAIGNDQ',
      accessToken: 'ya29.GlvSBAl3wasvP7--UqmTgP2rzY7wmuaq2u6QwVAs-3JPRnyniv6LGF8UWzcDR9VOzIm0vQxZNpPgVGPxlbEtEeOjmEvrCdSibg85EUrhOGpcW_o1MLK7xIVExFu9',

  }
});

var mailOptions = {
  from: 'adarsh95.ab@gmail.com',
  to: 'adarsh.bhagawan@hotmail.co.uk',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
