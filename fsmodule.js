var fs = require('fs'),
    path = require('path');

var filter = function(dir, ext, callback) {
  fs.readdir(dir, function(err, filelist){
    var files = [];
    if (err) {
      callback(err);
    }
    else {
      filelist.forEach(function forEachCallback(file){
        var fileext = '';
        if (path.extname(file)) {
          fileext = path.extname(file);
          if (fileext === '.' + ext) {
            files.push(file);
          }
        }
      });
      callback(null, files);
    }
  });
};

module.exports = filter;
