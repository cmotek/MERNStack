const { response } = require('express');
var express = require('express');
var app = express();
app.set('port', 3000);
app.listen(3000);


app.use('/', function(req, res, next) {
    res.send("Worked!");
    next();
});

//app.all('/admin/*', doAuthentification);
//app.get('/admin/stats', returnStats);
//app.get('/admin/approval', approval);

//functions in the above middelware need to be defined to test this

//app.get('/test', cb1, cb2);

//function cb1(req, res, next) {
//    console.log("Got here first");
//    next();
//};

//function cb2(req, res) {
//    console.log("Got here second");
//    res.send("Worked!");
//};


//app.get('/test', function(req, res, next) {
//    console.log("Got here first");
//    next();
//});

//app.get('/test', function(req, res) {
//    console.log("Got here second");
//});