const { response } = require('express');
var express = require('express');
var app = express();
app.set('port', 3000);
app.listen(3000);

app.get('/', function(req, res) {
    res.send(req.url);
    console.log(req.url);
});




