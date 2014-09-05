var fs = require('fs'),
    path = require('path'),
    dir = process.argv[2],
    ext = process.argv[3];

fs.readdir(dir, function readdirCallback(err, list){
	list.forEach(function forEachCallback(item){
		if (path.extname(item) == ext) {
			console.log(item);
    }
		/*
		if (item === ext) {
      console.log(item);
    }
    var exploded = item.split('.'),
        count = exploded.length;
    if (exploded[count - 1] === ext) {
      console.log(item);
    }
		*/
  });
});
