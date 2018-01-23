const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const app = express();





app.use(bodyParser.urlencoded({extended : true}));


app.get('/', (req,res) => {
    res.sendFile('/home/kuba/wlasne/ExpressHelloWorld/index.html');
    db.collection('quotes').find().toArray((err,results) => {
        console.log(results);
    })
});

app.post('/quotes', (req,res) => {
    db.collection('quotes').save(req.body, (err, result) => {
        if (err) return console.log(err);

        console.log('saved to database');
        res.redirect('/');
    })
})


let db;

MongoClient.connect('mongodb://JK:passwdJK1@ds113098.mlab.com:13098/tutorial_db', (err, client) => {
    if (err) return console.log(err);
    db = client.db('tutorial_db');
    app.listen('3002', ()=> {
        console.log('express server listening on port 3002');
    })
})

