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

app.get('/', function (req, res) {
    var text = req.query.str;
    var res = participle.division(text);
    var resStr = JSON.stringify(res);
    res.send(resStr);
});

app.listen(listenPort);