const { response } = require('express');
var express = require('express');
var app = express();
app.set('port', 3000);
app.listen(3000);


//The below works fine on first try
var routerA = express.Router();
var routerB = express.Router();

routerA.get('/weather', function(req, res) {
    res.send("Weather!");
});
routerA.get('/sports', function(req, res) {
    res.send("Sports!");
});

routerB.get('/tech', function(req, res) {
    res.send("Tech!");
});
routerB.get('/art', function(res, send) {
    res.send("Art!");
});

app.use('/news', routerA);
app.use('/blog', routerB);


//Could not get below param and get functions to work will have to return, may require other routings

//app.param('id', function(req, res, next, value) {
//    console.log("someone queried id " + value);
//    if (value != 99)
//    next()
//});

//app.get('productions/:category/:id', function(req, res) {
//    console.log(req.params[0] + req.params[1]);
//});



//app.use('/', function(req, res, next) {
//    res.send("Worked!");
//    next();
//});

//app.all('/admin/*', doAuthentification);
//app.get('/admin/stats', returnStats);
//app.get('/admin/approval', approval);

//functions in the above middleware need to be defined to test this

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