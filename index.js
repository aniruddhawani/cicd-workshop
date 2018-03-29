var http = require('http');
var request = require('request');

var html_page = "";

request('http://169.254.169.254/latest/meta-data/instance-id', function (error, response, body) {
  // console.log('body:', body);
  html_page = "<!DOCTYPE html><html><body><h1>The Homepage (First ever Commit)</h1><p>EC2 Instance Id: " + body + "</p></body></html>";
  http.createServer(function (req, res) {
    res.write(html_page);
    res.end();
  }).listen(80);
});