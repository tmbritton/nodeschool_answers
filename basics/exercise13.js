var http = require('http'),
    url = require('url'),
    port = process.argv[2];

var isoCallback = function(datetime) {
  var time = new Date(datetime),
      dateObj = new Object;
  dateObj.hour = time.getHours();
  dateObj.minute = time.getMinutes();
  dateObj.second = time.getSeconds();
  return JSON.stringify(dateObj);
};

var unixCallback = function(timestamp) {
  var dateObj = new Object;
  dateObj.unixtime = Date.parse(timestamp);
  return JSON.stringify(dateObj);
};

var server = http.createServer(function createServerCallback(req, res) {
  var path = '',
      urlFragments = url.parse(req.url, true),
      keys = Object.keys(urlFragments.query),
      dateResp = '';
  if(req.method === 'GET') {
    if(urlFragments.pathname === '/api/parsetime') {
      dateResp = isoCallback(urlFragments.query.iso);
    }
    else if(urlFragments.pathname === '/api/unixtime') {
      dateResp = unixCallback(urlFragments.query.iso);
    }
  }
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.write(dateResp);
  res.end();
});
server.listen(port);