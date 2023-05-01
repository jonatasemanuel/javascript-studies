var express = require('express');
var port = "8080";

var app = express();

app.get('/', function(req, res) {
  res.send("<h1>Home page</h1>");
});

app.get('/class', function(req, res) {
  res.send("<h1>Node.js class!!!</h1>");
});

app.get('/about', function(req, res) {
  res.send("<h1>Show system informations!!<h1/>")
});

app.listen( port, function() {
  console.log("Server port: ", port);
});
