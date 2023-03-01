//feature -> console-log
console.log("Application Framfork")

//Read File | feature -> read-file
const fs = require('fs')
fs.readFile('File.txt', 'utf8', function(err,data) {
    if (err) throw err;
    console.log(data);
});