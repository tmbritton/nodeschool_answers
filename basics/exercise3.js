var fs = require('fs'),
    file = '',
    buff = '',
    re = /(\n)/g;
file = process.argv[2];
buff = fs.readFileSync(file);
console.log(buff.toString().match(re).length);
