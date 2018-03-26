const express = require('express');
const app = express();
const users = require('./users');

app.get('/', function(req, res){
    console.log(users());
   res.send();
});

app.listen(9090,function(){
    console.log('App listening on port 9090');
})