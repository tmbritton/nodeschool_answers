var concat = require('concat-stream'),
    http = require('http'),
    urls = [process.argv[2], process.argv[3], process.argv[4]],
    dataContainer = [];

urls.forEach(function forEachCallback(url, index){
  http.get(url, function getCallback(response){
    response.pipe(concat(function concatCallback(data){
      dataContainer[index] = data.toString();
      if(dataContainer[0] !== undefined && dataContainer[1] !== undefined && dataContainer[2] !== undefined) {
        dataContainer.forEach(function dataForeachCallback(item){
          console.log(item);
        });
      }
    }));
  });
});
