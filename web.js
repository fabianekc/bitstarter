var express = require('express');
var fs = require('fs');
var htmlfile = "index.html";
var usecases_html = "usecases.html"
var developers_html = "developers.html"
var investors_html = "investors.html"

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var html = fs.readFileSync(htmlfile).toString();
  response.send(html);
});
app.get('/usecases', function(request, response) {
  response.send(fs.readFileSync(usecases_html).toString());
});
app.get('/developers', function(request, response) {
  response.send(fs.readFileSync(usecases_html).toString());
});
app.get('/investors', function(request, response) {
  response.send(fs.readFileSync(usecases_html).toString());
});


var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
