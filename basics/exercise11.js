var fs = require('fs'),
    http = require('http'),
    port = process.argv[2],
    file = process.argv[3];

var server = http.createServer(function createServerCallback(req, res){
  fs.readFile(file, 'utf8', function readFileCallback(err, data){
    if (err) {
      console.log(err);
      return;
    } 
    else {
      res.write(data);
      res.end();
    }
  })
});

server.listen(port);