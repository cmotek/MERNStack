console.log("Hello World");

var x = 7;
var s = "Hi there";

function blah(num, str) {
    if (num == 0) {
        return "Can't do that";
    }
    return str.toUpperCase() + " " + Math.pow(num,3);
}

var result = blah(x, s);

console.log(result);