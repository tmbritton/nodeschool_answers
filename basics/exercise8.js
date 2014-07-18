var concat = require('concat-stream'),
    http = require('http'),
    url = process.argv[2];

http.get(url, function getCallback(response){
  response.pipe(concat(function concatCallback(data){
    console.log(data.toString().length);
    console.log(data.toString());
  }));
});
