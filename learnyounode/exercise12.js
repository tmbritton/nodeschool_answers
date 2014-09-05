var http = require('http'),
    port = process.argv[2];

var server = http.createServer(function createServerCallback(req, res){
  if(req.method == 'POST') {
    req.on('data', function(data) {
      //console.log(data.toString().toUpperCase());
      res.write(data.toString().toUpperCase());
    });
    req.on('end', function() {
      res.end();
    });
  }
});
server.listen(port);