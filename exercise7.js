var http = require('http'),
    url = process.argv[2];

http.get(url, function getCallback(response){
  response.setEncoding('utf8');
  response.on('data', function responseCallback(data){
    console.log(data);
  })
});
