import path from 'path';
import express from 'express';
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
var app = express();
app.set('port', 3000);
app.listen(3000);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.get('/test', function(req, res) {
    res.render('test.jade', {
        title: 'My News Stories ',
        //stories: items
    });
});

//I'm probably going to need to do some research to get this thing to work