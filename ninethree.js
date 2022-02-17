const { response } = require('express');
var express = require('express');
var app = express();
app.set('port', 3000);


//could not get image use function to work

//app.use('./images', express.static('images'));
//app.listen(3000);


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

//Have to get this error handler to work

//var router = express.Router();

//router.delete('/:id', authHelper.checkAuth, function (req, res, next) {
//    if (req.params.id != '77')
//        return next(new Error('Invalid request'));


//    res.status(200).json({ msg: 'Logged out'});
//});


//Could not get error function to work below, I should probably get this all reworking together, I can't take days off of this book and expect to 'get it' when I get back

//app.get('test/:id', function(req, res, next) {
//    if (req.params.id == 0)
//        next(new Error('Not Found'));

//    next()
//});

//app.use(function(err, req, res, next) {
//    console.error(err);
//    res.status(500).send('Something bad happened');
//});

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