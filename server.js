/*********************************************************************************
* WEB322: Assignment 2
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: Asif Imtiaz Ahmed Student ID: 138408174 Date: 01/21/2019
*
* Online (Heroku) URL: 
*
********************************************************************************/ 

var express = require('express');
var app = express();
var HTTP_PORT = process.env.PORT || 8080;

// setup a 'route' to listen on the default url path
//app.get('/', (req, res) => { res.send('Express http server listening on '+ HTTP_PORT);});
app.get("/",function(request,response){
  response.send("Working");
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT, function(){
  console.log("listening");
});