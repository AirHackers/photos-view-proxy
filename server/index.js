var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var port = 3000;

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: true });

app.use(express.static(path.join(__dirname, '../public')));

app.get('/home/:id')

app.listen(port);

