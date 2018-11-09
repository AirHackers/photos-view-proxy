var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var port = 8082;

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: true });

app.use(express.static(path.join(__dirname, '../public')));

app.get('/homes/:id', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

app.listen(port);

