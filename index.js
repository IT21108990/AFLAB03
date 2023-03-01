//feature -> console-log
console.log("Application Framfork")

//Read File | feature -> read-file
const fs = require('fs')
fs.readFile('File.txt', 'utf8', function(err,data) {
    if (err) throw err;
    console.log(data);
});


//Write to file | feature -> write-file
const fs = require('fs');
fs.writeFile('file.txt', 'Hello World!', function (err) {
    if (err) throw err;
    console.log('File saved!');
});


//Creating a web server | feature -> create-web-server
const http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hello World!');
    res.end();
}).listen(8080);
