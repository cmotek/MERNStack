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

app.get('/news', function(req, res) {
    res.send("News page");
});

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

//not sure the use function works 

app.get('/news/categories/:category', function(req, res) {
    res.send(category);
    console.log('Your category was ' + req.params.category);
});

app.get('/news/categories', function(req, res) {
    res.send('Categories');
    //console.log('Your category was ' + req.params.category);
});

