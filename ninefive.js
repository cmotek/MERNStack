var express = require('express');
var app = express();


app.get('/', function(req, res) {
    res.status(200);
    res.set({'Content-Type': 'text/html'});
    res.send('<html><body>Some body text</body></html>');
});

app.get('/test_json', function(req, res) {
    res.status(200);
    res.set('json spaces', 4);
    res.json({name:'me', age: 37 });
});

app.listen(3000);

//first get function works, second one sends TypeError [ERR_INVALID_HTTP_TOKEN]: Header name must be a valid HTTP token ["json spaces"]