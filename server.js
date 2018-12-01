var express = require('express');
var app = express();
const cors = require('cors');
app.use(cors());
app.options('*', cors());

app.get('/first', function (req, res) {
    setTimeout(function () {
        res.json("called first api");
    }, 1000)
});

app.get('/second', function (req, res) {
    setTimeout(() => {
        res.json("called second api");
    }, 1000);

});

app.listen(3001, function () {
    console.log("server is started from 3001 port");
});