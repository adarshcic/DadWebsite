var nodemailer = require('nodemailer');
var xoauth2 = require('xoauth2');


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
      type:'OAuth2',
      user:'adarsh95.ab@gmail.com',
      clientId: '864851092369-4ti4k7jbtuj28hqijht60v9npd3q5gqa.apps.googleusercontent.com',
      clientSecret: 'X2YyEq1NChvSqKNmlj5opLEa',
      refreshToken: '1/kaCfY-k3cxB4RxHOpPHhsnlVYGcsjjuX-2fCw4bcLmk',
      accessToken: 'ya29.GlvTBPZfMSTbwGIEYGPaAWv3wsdnUkblAQ3yxOgz8xNyetlfqONnciChceNwC8Z_jOc6JpGNxCcYo_VDHjjy7Hd79Swsfbp9_Yx1Da_W0pXLKGPxbxTow1ohkjiB',
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
