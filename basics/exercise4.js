var fs = require('fs'),
    filepath = process.argv[2],
		string = '',
    regex = /(\n)/g;

fs.readFile(filepath, 'utf8', function readFileCallback(err, data){
	if (err) {
		console.log(err);
  }
  else {
  	console.log(data.match(regex).length);  
  }
});
