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


//Making a HTTP request | feature -> http-request
const https = require('https');
https.get('https://jsonplaceholder.typicode.com/posts/1', (resp) => {
    let data = '';

    resp.on('data', (chunk) => {
        data += chunk;
    });

    resp.on('end', () => {
        console.log(JSON.parse(data));
    });
}).on('error', (err) => {
    console.log("Error: " + err.message);
});


//Using a module | feature -> using-module
const myModule = require('./my-module.js');
console.log(myModule.myFunction());


//Promises | feature -> promises
const myPromise = new Promise((resolve, reject) => {
    if (condition) {
        resolve('Success!');
    } else {
        reject('Failure!');
    }
});
myPromise.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});


//Async/Await | feature -> async
async function myFunction() {
    try {
        const result = await myPromise;
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

myFunction();

//hii kaveen
   