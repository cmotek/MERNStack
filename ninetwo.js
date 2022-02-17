const { response } = require('express');
var express = require('express');
var app = express();
app.set('port', 3000);
app.listen(3000);

// var server = app.listen(3000, funtion() {
//    debug('Express server listening on port ' + server.address().port )
//});

app.get('/about', function(req, res) {
    res.send("About page");
});

//app.get('/news', function(req, res) {
//    res.send("News page");
//});

app.get('/news', function(req, res) {
    console.log(req.query.category);
});

//getting undefined back on the above

//app.get('/news/categories/:category', function(req, res) {
//    res.send('Category');
//    console.log('Your category was ' + req.params.category);
//});

app.get('/products/:category/:id', function(req, res) {
    console.log(req.params['category'] + req.params['id']);
});

//I'm getting back NaN and undefined on the array index for req.params maybe req.route.params?

app.route('/customer')
    .get(function(req, res) {res.send('Get a customer');})
    .post(function(req, res) {res.send('Add a customer');})
    .put(function(req, res) {res.send('Update a customer');})

//May have to use Advanced REST client to test the above *POSTMAN is common*

app.all('/test', function(req, res) {
    res.type('text/plain');
    res.send('This a test');
});

app.use(function(req, res) {
    res.type('type/plain');
    res.status(404);
    res.send('404 - Not found');
})

//not sure the use 404 function works 


