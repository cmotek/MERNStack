import { response } from 'express';
import express from 'express';
var app = express();
app.set('port', 3000);
app.listen(3000);


var db = {}
import { MongoClient } from 'mongodb';



    db.collection.insertOne({property1: "Hi", property2: 77}, function (err, result) {
        if (err) console.LogError("Create error happened");
        else console.log(JSON.stringify(result.ops[0], null, 4));
    });
});


//The insertOne function worked however will have to retest to get the result.ops to work 