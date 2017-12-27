const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send('Hello world!');
});

console.log('will respond with Hello string');

app.listen('3002', ()=> {
    console.log('express server listening on port 3002');
})