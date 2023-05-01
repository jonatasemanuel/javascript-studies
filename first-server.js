var http = require('http');
var file = require('fs');

var filename = process.argv[2];

if ( filename == '' || filename == null) {
  console.log("\nHtml name file missed!");
}else{
  http.createServer(function (req, res) {

    file.readFile( filename, function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end();
    });

  }).listen(5555);

  console.log('Node server running at port :5555')
}
