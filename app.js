//declare global variables
var express = require('express');
var nodemailer = require('nodemailer');
var fs = require('fs');
var path = require('path');
var app = express();
var http = require('http').Server(app);


app.use(express.static('public'));

//create a route
app.get('/', function(req, res) {
  res.sendfile('index.html');
});

var io = require('socket.io')(http);

http.listen(3000, function() {
  console.log('listening on *:3000');
});
