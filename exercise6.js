var fsmodule = require('./fsmodule.js'),
    dir = process.argv[2],
    ext = process.argv[3];

var listItems = {
  callback: function(err, data) {
    if (err) {
      console.log(err);
    }
    else {
      data.forEach(function forEachCallBack(file){
        console.log(file);
      });
    }
  },

  filterDir: function(dir, ext, callback) {
    fsmodule(dir, ext, callback);
  },

  init: function() {
    var cb = listItems.callback;
    listItems.filterDir(dir, ext, cb);
  },

};

listItems.init();
