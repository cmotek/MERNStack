var http = require('http');

var server = http.createServer(function (request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World\n");
});

var async = require('async');
var fs = require('fs');

async.eachSeries(['package.json','server.js'], function(file, callback) {
    console.log('Reading file  ', + file);
    fs.readFile(file, 'utf8', function read(err, data) {
        console.log(data);
        callback();
    });
}, function(err) {
    if(err) {
        console.log('A file failed to load');
    } else {
        console.log('All files have been successfully read');
    }
});

var x = 7;
var s = "Hi there";
var fs = require('fs');

function blah(n, s) {
    if (n == 0) {
        return "No";
    }
    return s.toUpperCase() + " " + Math.pow(n,3);
}

console.log(blah(x,s));
fs.readFile('package.json', 'utf8', function(err, data) {
    console.log(data);
});

setInterval(function () {
    console.log('Hello again!');
}, 5000)

server.listen(3000);