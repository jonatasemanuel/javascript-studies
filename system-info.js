var http = require('http');
var url = require('url');
var os = require('os');

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var info = q.pathname;
  if (info == "/info") {
    res.writeHead(200, {'Content-Type': 'text/html'});
    let infomation = "SO: " + os.platform() + "<br>"
        + "Cpu: " + os.arch() + "<br>"
        + "Mem: " + os.freemem() + "<br>"
        + "Uptime: " + os.uptime() + "<br>"
        + "Carga: " + os.loadavg() + "<br>"
        + "Usuario: " + os.userInfo().username + "<br>"
        + "Pasta inicial: " + os.userInfo().homedir + "<br>"
    ;
        console.log( os.userInfo() );
        res.write(information);
        res.end();
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("<h1> No informations </h1>");
    res.end();
  };
}).listen(8080);
console.log("Init...");
