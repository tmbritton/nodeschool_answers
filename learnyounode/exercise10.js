var net = require('net'),
    strftime = require('strftime'),
    port = process.argv[2],
    date = '';

var server = net.createServer(function createServerCallback(socket){
  date = strftime('%F %R');
  socket.write(date);
  socket.end();
});

server.listen(port);
