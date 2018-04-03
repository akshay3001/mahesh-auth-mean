var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Port = 3008;
var api = require('./routes/api');
var app = express();

app.use(bodyParser.json());

app.use('/api', api);
app.get('/', function (req, res){
  res.send('Hi server is working properly');
});


app.listen(Port, function(){
  console.log('Server is running properly on ' + Port);
});
