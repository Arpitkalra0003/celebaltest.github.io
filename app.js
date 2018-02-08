var link = require("openurl").open("http://192.168.3.134:8000");
var express = require('express');

var app = express();
app.listen(3000,function(){
	console.log("App is started on port number 3000 and enjoy!")
});