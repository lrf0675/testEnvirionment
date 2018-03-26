var express = require('express');
var app = express();
var bodyParser = require('body-parser');


var users = require('./users');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 9090;
var router = express.Router();

router.get('/', function(req, res) {
  res.json({ message: 'Express & API Gateway!' });
});

router.route('/user/:userId').get(function(req,res){
  users.getUsers(req,res)
});

app.use('/',router);


app.listen(port);
console.log('App listening on port 9090');

module.exports = app;