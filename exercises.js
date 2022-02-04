console.log("Hello World");

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


//setTimeout(function () {
//    console.log('World!');
//}, 1000)

//console.log('Hello!');