/**
 * Created by box on 2017/10/16.
 */
var express = require('express');
var app = express();

var participle = require('./participle.js');

var config = require('./config.json');
var listenPort = config.port;

process.on('uncaughtException', function (err) {
    console.error('Caught exception: ' + err.stack);
});

app.get('/cut', function (req, res) {
    var text = req.query.text;
    var words = participle.cut(text);
    res.send(words);
});

app.get('/extract', function (req, res) {
    var text = req.query.text;
    var topN = req.query.topN ? req.query.topN : 3;
    var words = participle.extract(text, topN);
    res.send(words);
});

app.listen(listenPort);
console.log("port", listenPort);