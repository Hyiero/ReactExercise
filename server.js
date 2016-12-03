var express = require('express');
var path = require('path');
var app = new express();
//correct way to join the current directory and a folder hanging off of it.
var appDir = path.join(__dirname,'build');
var PORT = 8080;

//This sets the root directory for our application to app
app.use(express.static(appDir));


//TODO: Put this in routes file
//This will send down our index.html inside our app folder anytime we navigate anywhere on our page.
app.get('*',function(req,res){
    res.sendFile(path.join(appDir,'index.html'));
});


app.listen(PORT);
console.log("Server now active on "+PORT);